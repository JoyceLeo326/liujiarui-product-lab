const roleCopy = {
  recruiter: '如果你在判断我能不能把一件事做完整，先看这些从问题走到交付的故事。',
  judge: '如果你关心作品为什么不同，先看具体冲突、关键取舍和最后留下的结果。',
  user: '如果你现在就想使用，先从这些可以直接开始、完成并拿到结果的产品进入。',
  collaborator: '如果你想一起做事，先看我怎样保留边界、版本和可以继续接手的线索。'
};

const roleWeight = {
  recruiter: ['群体决策', '研究交付', '故事改编', '学习交付'],
  judge: ['完整故事', '证据门禁', '交互叙事', '约束决策'],
  user: ['健康安全', '城市出行', '课堂交付', '真实导出'],
  collaborator: ['可复现', '版本', '协作', '证据链']
};

const grid = document.querySelector('[data-project-grid]');
const template = document.querySelector('#project-template');
const roleExplanation = document.querySelector('#role-explanation');
const visibleCount = document.querySelector('#visible-count');
let activeRole = 'recruiter';
let projects = [];

function makeTextElement(tag, text, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}

function scoreForRole(project, role) {
  const tags = project.tags.join('');
  const keywordScore = roleWeight[role].reduce((score, keyword) => score + (tags.includes(keyword) ? 3 : 0), 0);
  return keywordScore + (project.roles.indexOf(role) === 0 ? 2 : 0) + (project.roles.includes(role) ? 1 : -20);
}

function actionLink(label, href, external = false) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  if (external) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  return link;
}

function renderProject(project, index) {
  const fragment = template.content.cloneNode(true);
  const article = fragment.querySelector('article');
  article.dataset.repo = project.repo;
  if (project.status === 'research') article.classList.add('is-research');
  if (project.status === 'unavailable') article.classList.add('is-unavailable');

  fragment.querySelector('.card-index').textContent = String(index + 1).padStart(2, '0');
  fragment.querySelector('.card-stage').textContent = project.stage;
  const statusLabel = {
    live: '可体验',
    research: '研究记录',
    unavailable: '暂不开放'
  };
  fragment.querySelector('.card-status').textContent = statusLabel[project.status];
  fragment.querySelector('h3').textContent = project.name;
  fragment.querySelector('.card-summary').textContent = project.summary;
  fragment.querySelector('.story-person').textContent = project.story.person;
  fragment.querySelector('.story-conflict').textContent = project.story.conflict;
  fragment.querySelector('.story-outcome').textContent = project.story.outcome;

  const tagList = fragment.querySelector('.tag-list');
  project.tags.forEach((tag) => tagList.append(makeTextElement('li', tag)));

  const actions = fragment.querySelector('.card-actions');
  if (project.status !== 'unavailable') {
    actions.append(actionLink(project.status === 'research' ? '查看研究路径 →' : '进入产品 →', project.primaryUrl, project.primaryUrl.startsWith('http')));
  }
  if (project.sourceVisibility === 'public') actions.append(actionLink('公开源码 ↗', project.github, true));

  return fragment;
}

function renderProjects() {
  const relevant = projects
    .filter((project) => project.roles.includes(activeRole))
    .sort((a, b) => scoreForRole(b, activeRole) - scoreForRole(a, activeRole));

  grid.replaceChildren(...relevant.map(renderProject));
  visibleCount.textContent = String(relevant.length);
  grid.setAttribute('aria-busy', 'false');
}

function selectRole(role) {
  activeRole = role;
  document.querySelectorAll('[data-role]').forEach((button) => {
    const selected = button.dataset.role === role;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  roleExplanation.textContent = roleCopy[role];
  renderProjects();
}

document.querySelectorAll('[data-role]').forEach((button) => {
  button.addEventListener('click', () => selectRole(button.dataset.role));
});

async function loadProjects() {
  try {
    const response = await fetch('./projects.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    projects = await response.json();
    renderProjects();
  } catch {
    grid.setAttribute('aria-busy', 'false');
    grid.replaceChildren(makeTextElement('p', '作品目录暂时没有加载成功，请稍后刷新。', 'empty-state'));
  }
}

loadProjects();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  const workers = [
    ['./sw.js', './'],
    ['./products/route/sw.js', './products/route/'],
    ['./products/rural/sw.js', './products/rural/']
  ];
  window.addEventListener('load', () => {
    Promise.allSettled(
      workers.map(([script, scope]) => navigator.serviceWorker.register(script, { scope }))
    );
  });
}
