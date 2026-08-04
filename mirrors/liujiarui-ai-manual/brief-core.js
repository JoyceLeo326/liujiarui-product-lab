(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.LjrBrief = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ROLES = {
    recruiter: { label: '招聘与人才伙伴', need: '快速判断能力与岗位场景是否匹配', voice: '先给判断依据，再给合作建议' },
    'project-lead': { label: '项目负责人', need: '让目标、责任、风险与回传节点同时可见', voice: '先锁定结果，再拆最短路径' },
    teammate: { label: '未来协作伙伴', need: '尽快建立共同语言和反馈节奏', voice: '先做出可见版本，再一起校准' }
  };
  var TASKS = {
    content: { label: '内容策划', conflict: '素材很多，但受众、主线与行动目标容易互相拉扯', deliverable: '内容结构、样稿与发布检查表', firstMove: '确认目标读者、唯一核心信息与参考边界' },
    research: { label: '用户研究', conflict: '意见很多，但现象、证据和推断尚未分开', deliverable: '问题地图、证据记录与优先级判断', firstMove: '把现象改写成可观察、可验证的问题' },
    event: { label: '活动推进', conflict: '时间与依赖同时变化，任何隐性责任都可能变成最后一刻风险', deliverable: '节点表、责任人、风险清单与复盘卡', firstMove: '锁定不可移动的节点、依赖与决策人' }
  };
  var URGENCY = {
    today: { label: '今天需要推进', cadence: '启动后 60 分钟回传首版，关键风险即时暴露', scope: '先守住一个最关键结果' },
    week: { label: '本周完成', cadence: '24 小时内给方向稿，中段校准一次，交付前自检', scope: '保留一轮真实反馈与迭代' },
    month: { label: '本月形成闭环', cadence: '每周固定一次进展、证据与风险回传', scope: '同步沉淀模板、决策记录与复盘' }
  };

  function pick(value, map, fallback) {
    return Object.prototype.hasOwnProperty.call(map, value) ? value : fallback;
  }

  function normalize(input) {
    var source = input || {};
    return {
      visitorRole: pick(source.visitorRole, ROLES, 'project-lead'),
      taskType: pick(source.taskType, TASKS, 'content'),
      urgency: pick(source.urgency, URGENCY, 'week'),
      goal: String(source.goal || '').replace(/\s+/g, ' ').trim().slice(0, 160) || '把一个真实任务推进到可检查的交付'
    };
  }

  function buildBrief(input) {
    var profile = normalize(input);
    var role = ROLES[profile.visitorRole];
    var task = TASKS[profile.taskType];
    var urgency = URGENCY[profile.urgency];
    return {
      profile: profile,
      labels: { visitorRole: role.label, taskType: task.label, urgency: urgency.label },
      headline: '为「' + profile.goal + '」建立一条双方都看得见的协作路径。',
      story: [
        { stage: '起点', title: role.label + '带着真实任务到来', copy: '你需要' + role.need + '。我们先把“' + profile.goal + '”还原成可观察的结果。' },
        { stage: '冲突', title: task.label + '最容易失速的地方', copy: task.conflict + '；如果不先对齐，越快执行越可能返工。' },
        { stage: '选择', title: urgency.scope, copy: task.firstMove + '。沟通采用“' + role.voice + '”，节奏是：' + urgency.cadence + '。' },
        { stage: '结果', title: '交付不是文件，而是可继续推进的共识', copy: '本轮会留下' + task.deliverable + '，同时明确下一步、风险与需要谁做决定。' }
      ],
      actions: [
        { label: '先对齐', value: '目标：' + profile.goal + '；成功标准由结果、受众反馈或关键指标共同确认。' },
        { label: '第一步', value: task.firstMove + '，再交一个能被具体评论的版本。' },
        { label: '回传节奏', value: urgency.cadence + '。每次回传包含进度、证据、风险与下一步。' },
        { label: '最终交付', value: task.deliverable + '；涉及事实、链接与数据时逐项核验。' }
      ],
      questions: [
        '谁是最终使用者或受众？',
        '什么结果意味着本轮可以结束？',
        '有哪些不能改变的时间、品牌或合规边界？',
        '谁提供反馈，谁做最终决定？'
      ]
    };
  }

  function toMarkdown(brief) {
    var value = brief && Array.isArray(brief.story) ? brief : buildBrief(brief);
    var lines = [
      '# 刘佳锐｜协作任务 Brief',
      '',
      '目标：' + value.profile.goal,
      '',
      '- 你的角色：' + value.labels.visitorRole,
      '- 任务类型：' + value.labels.taskType,
      '- 推进节奏：' + value.labels.urgency,
      '',
      '## 协作故事',
      ''
    ];
    value.story.forEach(function (beat) { lines.push('### ' + beat.stage + '｜' + beat.title, '', beat.copy, ''); });
    lines.push('## 行动约定', '');
    value.actions.forEach(function (item) { lines.push('- **' + item.label + '**：' + item.value); });
    lines.push('', '## 启动前四问', '');
    value.questions.forEach(function (question) { lines.push('- [ ] ' + question); });
    lines.push('', '## 回传格式', '', '结论 → 已完成 → 证据/链接 → 风险 → 下一步 → 需要谁决定');
    return lines.join('\n');
  }

  return { normalize: normalize, buildBrief: buildBrief, toMarkdown: toMarkdown };
});
