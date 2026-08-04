(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AffectiveRoute = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ROLES = {
    beginner: { label: '领域初学者', identity: '先建立可解释的任务地图', start: '辨认文本、音频与视觉各自提供的情绪线索' },
    reproducer: { label: '复现实践者', identity: '把论文描述落实成能复跑的基线', start: '固定数据切分、指标、随机种子与单模态对照' },
    researcher: { label: '研究探索者', identity: '从失效现象中长出可验证的问题', start: '先写下假设、反例和最低限度的消融矩阵' }
  };
  var GOALS = {
    understand: { label: '理解核心机制', outcome: '能用自己的话解释对齐、融合与模态不平衡', artifact: '概念图与反例卡' },
    baseline: { label: '跑通可靠基线', outcome: '得到可复跑、可比较、可定位误差的实验基线', artifact: '实验卡与结果表' },
    question: { label: '形成研究问题', outcome: '提出边界明确且能被实验推翻的研究问题', artifact: '问题陈述与消融方案' }
  };
  var OBSTACLES = {
    math: { label: '公式与形状', action: '先手算张量形状，再运行最小 NumPy 实验', checkpoint: '能解释 Q/K/V 的方向和 mask 的作用' },
    papers: { label: '论文脉络', action: '先读任务、证据和限制，再把论文放进比较矩阵', checkpoint: '能区分作者结论、实验事实与自己的推断' },
    code: { label: '代码与复现', action: '先锁定环境、数据切分和指标，再逐项替换模块', checkpoint: '同一命令能稳定复跑并留下配置快照' }
  };

  function pick(value, map, fallback) {
    return Object.prototype.hasOwnProperty.call(map, value) ? value : fallback;
  }

  function normalizeProfile(input) {
    var source = input || {};
    var hours = Number(source.weeklyHours);
    return {
      role: pick(source.role, ROLES, 'beginner'),
      goal: pick(source.goal, GOALS, 'understand'),
      obstacle: pick(source.obstacle, OBSTACLES, 'math'),
      weeklyHours: Number.isFinite(hours) ? Math.min(30, Math.max(2, Math.round(hours))) : 5
    };
  }

  function buildRoute(input) {
    var profile = normalizeProfile(input);
    var role = ROLES[profile.role];
    var goal = GOALS[profile.goal];
    var obstacle = OBSTACLES[profile.obstacle];
    var minutes = Math.max(25, Math.floor(profile.weeklyHours * 60 / 5));
    var evidenceTask = profile.goal === 'baseline'
      ? '记录运行命令、种子、指标与失败样本'
      : profile.goal === 'question'
        ? '为主张设计一个支持实验和一个反证实验'
        : '把一个模型判断拆成可观察的证据链';
    var depthTask = profile.role === 'beginner'
      ? '用生活场景解释一次跨模态冲突'
      : profile.role === 'reproducer'
        ? '比较单模态、早期融合与缺失模态设置'
        : '定位性能提升究竟来自信息、容量还是数据偏差';
    return {
      profile: profile,
      labels: { role: role.label, goal: goal.label, obstacle: obstacle.label },
      headline: role.identity + '，最终' + goal.outcome + '。',
      story: [
        { stage: '起点', title: '进入多模态现场', copy: '你的身份是' + role.label + '。第一步不是追最新模型，而是' + role.start + '。' },
        { stage: '冲突', title: obstacle.label + '成为卡点', copy: '如果直接绕过它，后面的结果很难解释。当前策略是：' + obstacle.action + '。' },
        { stage: '选择', title: '把一周切成五次推进', copy: '每次约 ' + minutes + ' 分钟，只解决一个可检查的问题，并把判断写进证据记录。' },
        { stage: '结果', title: goal.label, copy: '路线结束时，你会留下' + goal.artifact + '，并且' + goal.outcome + '。' }
      ],
      steps: [
        { id: 'orient', index: '01', phase: '定向', title: '校准任务与成功标准', duration: minutes, action: '写下输入模态、目标标签、评价指标，以及什么结果才算“完成”。', check: '产出一张不超过 8 行的任务卡。' },
        { id: 'foundation', index: '02', phase: '拆解', title: '攻克当前主要障碍', duration: minutes, action: obstacle.action + '；' + depthTask + '。', check: obstacle.checkpoint + '。' },
        { id: 'experiment', index: '03', phase: '实验', title: '让模态在对照中说话', duration: minutes, action: '分别观察文本、音频、视觉信号，再制造一次冲突或缺失，记录融合结果为何改变。', check: '至少保存一组单模态与融合对照。' },
        { id: 'evidence', index: '04', phase: '证据', title: '把现象变成可复查判断', duration: minutes, action: evidenceTask + '；明确哪些是观察、哪些是推断。', check: '每条结论都能指回数据、配置或论文原文。' },
        { id: 'deliver', index: '05', phase: '交付', title: '形成下一轮研究抓手', duration: minutes, action: '整理' + goal.artifact + '，写下一个最可信结论、一个未解问题和下一次最小实验。', check: '另一位读者能沿记录复现你的判断路径。' }
      ]
    };
  }

  function toMarkdown(route) {
    var value = route && Array.isArray(route.steps) ? route : buildRoute(route);
    var lines = [
      '# 情感计算研究路线',
      '',
      '- 当前身份：' + value.labels.role,
      '- 本轮目标：' + value.labels.goal,
      '- 主要障碍：' + value.labels.obstacle,
      '- 每周投入：' + value.profile.weeklyHours + ' 小时',
      '',
      '## 研究旅程',
      ''
    ];
    value.story.forEach(function (beat) {
      lines.push('### ' + beat.stage + '｜' + beat.title, '', beat.copy, '');
    });
    lines.push('## 五步路线', '');
    value.steps.forEach(function (step) {
      lines.push('### ' + step.index + ' ' + step.title, '', '- 阶段：' + step.phase, '- 建议时长：' + step.duration + ' 分钟', '- 行动：' + step.action, '- 检查点：' + step.check, '');
    });
    lines.push('## 结束前自检', '', '- [ ] 观察与推断已经分开', '- [ ] 指标、配置与来源可追溯', '- [ ] 失败或反例没有被隐藏', '- [ ] 下一步能用一个最小实验验证');
    return lines.join('\n');
  }

  return {
    normalizeProfile: normalizeProfile,
    buildRoute: buildRoute,
    toMarkdown: toMarkdown
  };
});
