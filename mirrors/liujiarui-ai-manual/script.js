(() => {
  const Brief = window.LjrBrief;
  const root = document.documentElement;
  const themeToggle = document.querySelector('#themeToggle');
  const themeLabel = document.querySelector('#themeLabel');
  const progressBar = document.querySelector('#progressBar');
  const sectionToggles = [...document.querySelectorAll('.section-toggle')];
  const expandAll = document.querySelector('#expandAll');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  const ambientLight = document.querySelector('.ambient-light');
  const tiltItems = [...document.querySelectorAll('[data-tilt]')];
  const textRevealItems = [...document.querySelectorAll('[data-text-reveal]')];
  const commandTrigger = document.querySelector('#commandTrigger');
  const commandPalette = document.querySelector('#commandPalette');
  const commandClose = document.querySelector('#commandClose');
  const commandSearch = document.querySelector('#commandSearch');
  const commandItems = [...document.querySelectorAll('[data-command]')];
  const commandEmpty = document.querySelector('#commandEmpty');
  const modeButtons = [...document.querySelectorAll('[data-mode]')];
  const modePanel = document.querySelector('#modePanel');
  const modeTitle = document.querySelector('#modeTitle');
  const modeSummary = document.querySelector('#modeSummary');
  const modeSteps = document.querySelector('#modeSteps');
  const modeKicker = document.querySelector('.mode-kicker');
  const modeEmoji = document.querySelector('#modeEmoji');
  const readinessItems = [...document.querySelectorAll('[data-readiness-item]')];
  const readinessCount = document.querySelector('#readinessCount');
  const readinessProgress = document.querySelector('#readinessProgress');
  const copyBrief = document.querySelector('#copyBrief');
  const copyStatus = document.querySelector('#copyStatus');
  const resetReadiness = document.querySelector('#resetReadiness');
  const briefForm = document.querySelector('[data-brief-form]');
  const collaborationStory = document.querySelector('[data-collaboration-story]');
  const briefSummary = document.querySelector('[data-brief-summary]');
  const briefActions = document.querySelector('[data-brief-actions]');
  const downloadBrief = document.querySelector('[data-download-brief]');
  let activeBrief = null;

  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // The page stays fully usable when private browsing blocks storage.
      }
    }
  };

  const createTextElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const briefInput = () => Brief.normalize({
    visitorRole: briefForm.elements.visitorRole.value,
    taskType: briefForm.elements.taskType.value,
    urgency: briefForm.elements.urgency.value,
    goal: briefForm.elements.goal.value
  });

  const renderBrief = (persist = true) => {
    activeBrief = Brief.buildBrief(briefInput());
    briefSummary.textContent = activeBrief.headline;
    const storyCards = activeBrief.story.map((beat, index) => {
      const card = createTextElement('article', 'brief-story-card');
      card.append(createTextElement('span', '', `0${index + 1} / ${beat.stage}`));
      card.append(createTextElement('h4', '', beat.title));
      card.append(createTextElement('p', '', beat.copy));
      return card;
    });
    collaborationStory.replaceChildren(...storyCards);
    const actionRows = activeBrief.actions.map((item) => {
      const row = createTextElement('div', 'brief-action-row');
      row.append(createTextElement('strong', '', item.label));
      row.append(createTextElement('p', '', item.value));
      return row;
    });
    briefActions.replaceChildren(...actionRows);
    if (persist) storage.set('ljr-collaboration-brief', JSON.stringify(activeBrief.profile));
  };

  const restoreBrief = () => {
    let saved = null;
    try { saved = JSON.parse(storage.get('ljr-collaboration-brief') || 'null'); } catch { saved = null; }
    const profile = Brief.normalize(saved || {});
    Object.entries(profile).forEach(([key, value]) => {
      if (briefForm.elements[key]) briefForm.elements[key].value = value;
    });
  };

  const downloadTaskBrief = () => {
    renderBrief();
    const blob = new Blob([Brief.toMarkdown(activeBrief)], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '刘佳锐-协作任务-Brief.md';
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 500);
    const previous = downloadBrief.textContent;
    downloadBrief.textContent = 'Brief 已导出';
    window.setTimeout(() => { downloadBrief.textContent = previous; }, 1800);
  };

  briefForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderBrief();
  });
  briefForm.addEventListener('change', () => renderBrief());
  downloadBrief.addEventListener('click', downloadTaskBrief);
  restoreBrief();
  renderBrief(false);

  const preferredTheme = () => {
    const saved = storage.get('ljr-manual-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeLabel.textContent = dark ? '浅色阅读' : '深色阅读';
    themeToggle.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171914' : '#f2efe7');
  };

  const setSectionState = (button, expanded) => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(expanded));
    button.querySelector('.toggle-label').textContent = expanded ? '收起' : '展开';
    if (panel) panel.hidden = !expanded;
  };

  const syncExpandAllLabel = () => {
    const allExpanded = sectionToggles.every((button) => button.getAttribute('aria-expanded') === 'true');
    expandAll.textContent = allExpanded ? '全部收起' : '全部展开';
  };

  applyTheme(preferredTheme());

  if (!reducedMotion.matches) {
    root.classList.add('motion-ready');

    const segmenter = typeof Intl.Segmenter === 'function'
      ? new Intl.Segmenter('zh-CN', { granularity: 'word' })
      : null;
    let revealTokenIndex = 0;

    textRevealItems.forEach((item) => {
      const accessibleLabel = item.textContent.replace(/\s+/g, ' ').trim();
      if (accessibleLabel) item.setAttribute('aria-label', accessibleLabel);

      const walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);

      textNodes.forEach((textNode) => {
        const source = textNode.nodeValue;
        if (!source || !source.trim()) return;
        const segments = segmenter
          ? [...segmenter.segment(source)].map(({ segment }) => segment)
          : Array.from(source);
        const fragment = document.createDocumentFragment();

        segments.forEach((segment) => {
          if (/^\s+$/.test(segment)) {
            fragment.append(document.createTextNode(segment));
            return;
          }
          const token = document.createElement('span');
          token.className = 'reveal-token';
          token.setAttribute('aria-hidden', 'true');
          token.style.setProperty('--reveal-delay', `${Math.min(revealTokenIndex, 18) * 42}ms`);
          token.textContent = segment;
          fragment.append(token);
          revealTokenIndex += 1;
        });

        textNode.replaceWith(fragment);
      });
      revealTokenIndex = 0;
    });

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

      revealItems.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        const startsInViewport = bounds.top < window.innerHeight * 0.96 && bounds.bottom > 0;
        if (startsInViewport) item.classList.add('is-visible');
        else revealObserver.observe(item);
      });

      const textRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-text-visible');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.16 });

      textRevealItems.forEach((item) => textRevealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      textRevealItems.forEach((item) => item.classList.add('is-text-visible'));
    }

    window.addEventListener('pointermove', (event) => {
      if (!ambientLight) return;
      ambientLight.style.setProperty('--pointer-x', `${event.clientX}px`);
      ambientLight.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, { passive: true });

    tiltItems.forEach((item) => {
      item.addEventListener('pointermove', (event) => {
        const bounds = item.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        item.style.setProperty('--tilt-x', `${(-vertical * 4).toFixed(2)}deg`);
        item.style.setProperty('--tilt-y', `${(horizontal * 5).toFixed(2)}deg`);
      }, { passive: true });

      item.addEventListener('pointerleave', () => {
        item.style.setProperty('--tilt-x', '0deg');
        item.style.setProperty('--tilt-y', '0deg');
      });
    });
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    textRevealItems.forEach((item) => item.classList.add('is-text-visible'));
  }

  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    storage.set('ljr-manual-theme', nextTheme);
  });

  sectionToggles.forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      setSectionState(button, !expanded);
      syncExpandAllLabel();
    });
  });

  expandAll.addEventListener('click', () => {
    const shouldExpand = sectionToggles.some((button) => button.getAttribute('aria-expanded') === 'false');
    sectionToggles.forEach((button) => setSectionState(button, shouldExpand));
    syncExpandAllLabel();
  });

  const collaborationModes = {
    first: {
      index: '01',
      emoji: '👋',
      title: '从一个真实小任务开始',
      summary: '先建立共同语言与质量坐标，再逐步扩大责任范围。',
      steps: ['给背景、目标与一个参考案例', '允许我先交一个低成本样稿', '用具体反馈完成第一次校准']
    },
    rescue: {
      index: '02',
      emoji: '🚑',
      title: '先止损，再恢复节奏',
      summary: '时间紧时不追求一次完美，先让最关键结果重新可控。',
      steps: ['标出唯一最高优先级', '锁定 60 分可交付版本', '每个关键节点主动回传风险']
    },
    longterm: {
      index: '03',
      emoji: '🌿',
      title: '把经验变成团队资产',
      summary: '长期协作的价值不只是熟练，而是不断减少重复沟通与重复劳动。',
      steps: ['固定目标与复盘节奏', '把高频任务沉淀为模板', '逐步扩大独立决策范围']
    }
  };
  let activeMode = 'first';

  const renderMode = (modeKey, persist = true) => {
    const mode = collaborationModes[modeKey] || collaborationModes.first;
    activeMode = collaborationModes[modeKey] ? modeKey : 'first';
    modeButtons.forEach((button) => {
      const selected = button.dataset.mode === activeMode;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    modePanel.dataset.activeMode = activeMode;
    modeKicker.textContent = `RECOMMENDED START / ${mode.index}`;
    modeEmoji.textContent = mode.emoji;
    modeTitle.textContent = mode.title;
    modeSummary.textContent = mode.summary;
    const steps = mode.steps.map((step) => {
      const item = document.createElement('li');
      item.textContent = step;
      return item;
    });
    modeSteps.replaceChildren(...steps);
    if (persist) storage.set('ljr-manual-mode', activeMode);
  };

  const savedMode = storage.get('ljr-manual-mode');
  renderMode(savedMode && collaborationModes[savedMode] ? savedMode : 'first', false);

  modeButtons.forEach((button, index) => {
    button.addEventListener('click', () => renderMode(button.dataset.mode));
    button.addEventListener('keydown', (event) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + modeButtons.length) % modeButtons.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % modeButtons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = modeButtons.length - 1;
      modeButtons[nextIndex].focus();
      renderMode(modeButtons[nextIndex].dataset.mode);
    });
  });

  const readSavedReadiness = () => {
    try {
      const parsed = JSON.parse(storage.get('ljr-manual-readiness') || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const savedReadiness = readSavedReadiness();
  readinessItems.forEach((item) => {
    item.checked = savedReadiness.includes(item.value);
  });

  const updateReadiness = (persist = true) => {
    const completed = readinessItems.filter((item) => item.checked);
    const total = readinessItems.length;
    const percent = total ? Math.round((completed.length / total) * 100) : 0;
    readinessCount.textContent = `${completed.length} / ${total} 已就绪`;
    readinessProgress.style.width = `${percent}%`;
    if (persist) storage.set('ljr-manual-readiness', JSON.stringify(completed.map((item) => item.value)));
  };

  readinessItems.forEach((item) => item.addEventListener('change', () => updateReadiness()));
  updateReadiness(false);

  resetReadiness.addEventListener('click', () => {
    readinessItems.forEach((item) => { item.checked = false; });
    updateReadiness();
    copyStatus.textContent = '清单已重置。';
  });

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(text),
          new Promise((_, reject) => window.setTimeout(() => reject(new Error('clipboard timeout')), 1200))
        ]);
        return;
      } catch {
        // Fall through for browsers that expose Clipboard API but block or stall it.
      }
    }
    const fallback = document.createElement('textarea');
    fallback.value = text;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'fixed';
    fallback.style.opacity = '0';
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand('copy');
    fallback.remove();
    if (!copied) throw new Error('copy unavailable');
  };

  copyBrief.addEventListener('click', async () => {
    const checkedLabels = readinessItems
      .filter((item) => item.checked)
      .map((item) => item.nextElementSibling?.textContent.trim())
      .filter(Boolean);
    const mode = collaborationModes[activeMode];
    const brief = [
      '刘佳锐｜公开协作说明',
      `当前合作模式：${mode.title}`,
      `开始前已确认：${checkedLabels.length ? checkedLabels.join('、') : '尚未勾选，请先对齐目标、时间、标准与反馈人'}`,
      '沟通格式：背景一句话 + 需要我做什么 + 何时回传。',
      '工作原则：先形成可见版本，以证据校准，AI 加速但由人负责。'
    ].join('\n');
    copyStatus.textContent = '正在准备合作说明…';
    try {
      await copyText(brief);
      copyStatus.textContent = '合作说明已复制，可以直接粘贴到聊天或任务卡。';
    } catch {
      copyStatus.textContent = '浏览器未允许自动复制，请手动选择页面内容。';
    }
  });

  const filterCommands = () => {
    const query = commandSearch.value.trim().toLocaleLowerCase('zh-CN');
    let visibleCount = 0;
    commandItems.forEach((item) => {
      const visible = !query || item.textContent.toLocaleLowerCase('zh-CN').includes(query);
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    commandEmpty.hidden = visibleCount > 0;
  };

  const openCommandPalette = () => {
    commandSearch.value = '';
    filterCommands();
    if (typeof commandPalette.showModal === 'function') commandPalette.showModal();
    else commandPalette.setAttribute('open', '');
    window.requestAnimationFrame(() => commandSearch.focus());
  };

  const closeCommandPalette = () => {
    if (typeof commandPalette.close === 'function') commandPalette.close();
    else commandPalette.removeAttribute('open');
  };

  commandTrigger.addEventListener('click', openCommandPalette);
  commandClose.addEventListener('click', closeCommandPalette);
  commandSearch.addEventListener('input', filterCommands);
  commandSearch.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown') return;
    const firstVisible = commandItems.find((item) => !item.hidden);
    if (firstVisible) {
      event.preventDefault();
      firstVisible.focus();
    }
  });

  commandItems.forEach((item) => {
    item.addEventListener('click', () => {
      const command = item.dataset.command;
      closeCommandPalette();
      if (command === 'navigate') {
        document.querySelector(item.dataset.target)?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      }
      if (command === 'theme') themeToggle.click();
      if (command === 'expand') {
        sectionToggles.forEach((button) => setSectionState(button, true));
        syncExpandAllLabel();
        document.querySelector('#manual')?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      }
    });
  });

  commandPalette.addEventListener('click', (event) => {
    if (event.target === commandPalette) closeCommandPalette();
  });
  commandPalette.addEventListener('close', () => commandTrigger.focus({ preventScroll: true }));

  document.addEventListener('keydown', (event) => {
    if (!(event.metaKey || event.ctrlKey) || event.key.toLocaleLowerCase() !== 'k') return;
    event.preventDefault();
    if (commandPalette.open) closeCommandPalette();
    else openCommandPalette();
  });

  const updateReadingProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progressBar.style.width = `${(ratio * 100).toFixed(2)}%`;
    storage.set('ljr-manual-progress', String(Math.round(ratio * 100)));
  };

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      updateReadingProgress();
      scheduled = false;
    });
  }, { passive: true });

  window.addEventListener('resize', updateReadingProgress, { passive: true });
  updateReadingProgress();
})();
