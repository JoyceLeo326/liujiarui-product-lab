(function () {
  'use strict';

  var Route = window.AffectiveRoute;
  var PROFILE_KEY = 'affective-route-profile-v1';
  var PROGRESS_KEY = 'affective-route-progress-v1';
  var form = document.querySelector('[data-route-form]');
  var activeRoute = null;
  var toastTimer = null;

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || '') || fallback; } catch (error) { return fallback; }
  }

  function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* The experience remains fully usable without persistence. */ }
  }

  function profileFromForm() {
    return Route.normalizeProfile({
      role: form.elements.role.value,
      goal: form.elements.goal.value,
      obstacle: form.elements.obstacle.value,
      weeklyHours: form.elements.weeklyHours.value
    });
  }

  function profileKey(profile) {
    return [profile.role, profile.goal, profile.obstacle, profile.weeklyHours].join(':');
  }

  function node(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  }

  function renderStory(route) {
    var container = document.querySelector('[data-story]');
    container.replaceChildren();
    route.story.forEach(function (beat, index) {
      var card = node('article', 'story-card');
      card.appendChild(node('span', '', '0' + (index + 1) + ' · ' + beat.stage));
      card.appendChild(node('h3', '', beat.title));
      card.appendChild(node('p', '', beat.copy));
      container.appendChild(card);
    });
    document.querySelector('[data-route-headline]').textContent = route.headline;
  }

  function progressFor(route) {
    var progress = readJSON(PROGRESS_KEY, {});
    return progress[profileKey(route.profile)] || {};
  }

  function updateProgressCopy(route) {
    var completed = progressFor(route);
    document.querySelector('[data-progress-count]').textContent = route.steps.filter(function (step) { return completed[step.id]; }).length;
  }

  function toggleStep(route, stepId, checked) {
    var progress = readJSON(PROGRESS_KEY, {});
    var key = profileKey(route.profile);
    progress[key] = progress[key] || {};
    progress[key][stepId] = checked;
    saveJSON(PROGRESS_KEY, progress);
    updateProgressCopy(route);
  }

  function renderRoute(route) {
    var container = document.querySelector('[data-route]');
    var completed = progressFor(route);
    container.replaceChildren();
    route.steps.forEach(function (step) {
      var card = node('article', 'route-card' + (completed[step.id] ? ' is-complete' : ''));
      card.appendChild(node('span', '', step.index));
      var titleWrap = node('div');
      var title = node('h3');
      title.appendChild(node('small', '', step.phase + ' · ' + step.duration + ' MIN'));
      title.appendChild(document.createTextNode(step.title));
      titleWrap.appendChild(title);
      card.appendChild(titleWrap);
      var details = node('div');
      details.appendChild(node('p', 'route-action', step.action));
      details.appendChild(node('p', 'route-check', '检查点：' + step.check));
      card.appendChild(details);
      var control = node('div', 'complete-control');
      var label = node('label');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = Boolean(completed[step.id]);
      checkbox.setAttribute('aria-label', '标记“' + step.title + '”为完成');
      checkbox.addEventListener('change', function () {
        card.classList.toggle('is-complete', checkbox.checked);
        toggleStep(route, step.id, checkbox.checked);
      });
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode('标记完成'));
      control.appendChild(label);
      card.appendChild(control);
      container.appendChild(card);
    });
    updateProgressCopy(route);
  }

  function renderRouteExperience(announce) {
    var profile = profileFromForm();
    activeRoute = Route.buildRoute(profile);
    saveJSON(PROFILE_KEY, profile);
    document.querySelector('[data-hours-output]').textContent = profile.weeklyHours + ' 小时';
    renderStory(activeRoute);
    renderRoute(activeRoute);
    if (announce) showToast('研究路线已按你的选择更新');
  }

  function restoreProfile() {
    var profile = Route.normalizeProfile(readJSON(PROFILE_KEY, {}));
    Object.keys(profile).forEach(function (key) {
      if (form.elements[key]) form.elements[key].value = profile[key];
    });
  }

  function showToast(message) {
    var toast = document.querySelector('[data-toast]');
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(function () { toast.hidden = true; }, 2600);
  }

  function downloadRoute() {
    if (!activeRoute) return;
    var blob = new Blob([Route.toMarkdown(activeRoute)], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = '情感计算研究路线.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 500);
    showToast('研究路线已导出');
  }

  function modalityState() {
    var lab = document.querySelector('[data-modality-form]');
    return ['text', 'audio', 'visual'].map(function (name) {
      return {
        name: name,
        score: Number(lab.elements[name].value),
        missing: lab.elements[name + 'Missing'].checked,
        weight: { text: .45, audio: .28, visual: .27 }[name]
      };
    });
  }

  function renderFusion() {
    var labels = { text: '文本', audio: '音频', visual: '视觉' };
    var states = modalityState();
    states.forEach(function (item) {
      var row = document.querySelector('[data-modality="' + item.name + '"]');
      row.classList.toggle('is-missing', item.missing);
      row.querySelector('output').textContent = item.score;
      document.querySelector('[data-hero-' + item.name + ']').textContent = (item.score / 100).toFixed(2);
    });
    var active = states.filter(function (item) { return !item.missing; });
    var score = 0;
    if (active.length) {
      var weight = active.reduce(function (sum, item) { return sum + item.weight; }, 0);
      score = Math.round(active.reduce(function (sum, item) { return sum + item.score * item.weight; }, 0) / weight);
    }
    document.querySelector('[data-fusion-score]').textContent = score;
    var label = '全部模态缺失，无法形成判断';
    var insight = '恢复至少一种信号后再观察；不要用默认值填补真实缺失。';
    if (active.length) {
      var sorted = active.slice().sort(function (a, b) { return b.score - a.score; });
      var spread = sorted[0].score - sorted[sorted.length - 1].score;
      label = score >= 67 ? '融合信号偏积极' : score <= 33 ? '融合信号偏消极' : '融合信号处于模糊区间';
      if (spread >= 25) label += '，且存在明显分歧';
      insight = labels[sorted[0].name] + '给出最强线索（' + sorted[0].score + '）；';
      insight += active.length === 1 ? '当前只有一个模态，无法交叉核对。' : '需要核对' + labels[sorted[sorted.length - 1].name] + '为何只到 ' + sorted[sorted.length - 1].score + '。';
    }
    document.querySelector('[data-fusion-label]').textContent = label;
    document.querySelector('[data-fusion-insight]').textContent = insight;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    renderRouteExperience(true);
    document.querySelector('#journey').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  form.addEventListener('input', function () {
    document.querySelector('[data-hours-output]').textContent = form.elements.weeklyHours.value + ' 小时';
  });
  document.querySelector('[data-download]').addEventListener('click', downloadRoute);
  document.querySelector('[data-modality-form]').addEventListener('input', renderFusion);

  restoreProfile();
  renderRouteExperience(false);
  renderFusion();
})();
