window.AppIcons = {
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  cpf:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16"/><path d="M7 9h5M7 13h3M15 9h3M15 13h3"/></svg>',
  company:'<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M4 21h16M8 7h2M12 7h2M8 11h2M12 11h2M8 15h2M12 15h2M18 21v-8h2v8"/></svg>',
  identity:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="M6 16c.8-2 5.2-2 6 0M14 9h4M14 13h4"/></svg>',
  pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  license:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14"/><circle cx="8" cy="12" r="2"/><path d="M12 9h6M12 13h6M12 16h4"/></svg>',
  car:'<svg viewBox="0 0 24 24"><path d="m5 11 2-5h10l2 5M3 11h18v7H3zM6 18v2M18 18v2M6 14h.01M18 14h.01"/></svg>',
  card:'<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14"/><path d="M3 9h18M6 15h4"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19"/><path d="M10 5h4M10 18h4"/></svg>',
  ballot:'<svg viewBox="0 0 24 24"><path d="M6 3h12v18H6z"/><path d="m9 8 1.5 1.5L14 6M9 13h6M9 17h6"/></svg>',
  person:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 21c.7-5 3.2-7 7-7s6.3 2 7 7"/></svg>',
  code:'<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>',
  info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  sun:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>',
  moon:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
  menu:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>'
};

window.AppTopbar = {
  pageNames: {
    home:'Início', cpf:'CPF', cnpj:'CNPJ', rg:'RG', cep:'CEP', cnh:'CNH',
    chassi:'Chassi', celular:'Número', titulo:'Título eleitoral', pessoa:'Pessoa física',
    empresa:'Empresa', endereco:'Endereço', codificadores:'Codificadores', decodificador:'Decodificador'
  },

  render(active) {
    const groups = [
      { title:'Geradores', links:[['cpf','CPF','cpf'],['cnpj','CNPJ','company'],['rg','RG','identity'],['cep','CEP','pin']] },
      { title:'Documentos', links:[['cnh','CNH','license'],['titulo','Título eleitoral','ballot']] },
      { title:'Veículos', links:[['chassi','Chassi / VIN','car']] },
      { title:'Dados', links:[['celular','Número','phone'],['pessoa','Pessoa física','person'],['empresa','Empresa','company'],['endereco','Endereço','pin']] },
      { title:'Dev', links:[['codificadores','Codificadores','code'],['decodificador','Decodificador','code']] }
    ];
    const link = ([key, label, icon]) => `
      <button type="button" data-route="${key}" data-page="${key}" class="topbar-link ${active === key ? 'active' : ''}">
        <span class="nav-icon">${AppIcons[icon]}</span><span>${label}</span>
      </button>`;

    return `
    <aside class="sidebar" id="topbar">
      <div class="sidebar-resizer" data-sidebar-resizer role="separator" aria-orientation="vertical" aria-label="Redimensionar menu lateral" aria-valuemin="76" aria-valuemax="420" aria-valuenow="264" tabindex="0"></div>
      <div class="brand">
        <img class="brand-mark" src="./favicon.webp" alt="" aria-hidden="true">
        <div><strong class="brand-name">Generator</strong></div>
      </div>
      <nav class="sidebar-home">${link(['home','Início','home'])}</nav>
      <div class="sidebar-scroll">
        ${groups.map((g, i) => `
        <section class="sidebar-group" data-group="${i}">
          <div class="sidebar-label-row">
            <button class="group-toggle" type="button" data-group-toggle="${i}" aria-label="Recolher categoria">−</button>
            <div class="sidebar-label">${g.title}</div>
          </div>
          <nav class="sidebar-nav">${g.links.map(link).join('')}</nav>
        </section>`).join('')}
      </div>
      <div class="sidebar-bottom">
        <div class="sidebar-note">
          <strong>Dados Gerados</strong>
          <span>Todo resultado é "fictício", gerado para desenvolvimento e testes.</span>
        </div>
        <div class="sidebar-footer"><span>GEN/BR</span><span>v2.0</span></div>
      </div>
    </aside>
    <div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>
    <header class="appbar">
      <button type="button" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false">${AppIcons.menu}</button>
      <div class="window-actions">
        <button type="button" class="circle-button" aria-label="Voltar" onclick="history.back()">${AppIcons.arrowLeft}</button>
        <button type="button" class="circle-button" aria-label="Avançar" onclick="history.forward()">${AppIcons.arrowRight}</button>
      </div>
      <div class="appbar-divider"></div>
      <div class="appbar-title">
        <span class="status-dot"></span>
        <span id="appbar-page">${this.pageNames[active] || 'Início'}</span>
        <span class="appbar-section">Dev Tools</span>
      </div>
      <button type="button" id="theme-toggle" aria-label="Alternar tema" title="Alternar tema">
        <span class="nav-icon" id="theme-icon">${AppIcons.moon}</span>
      </button>
    </header>`;
  },

  moveIndicator() {},

  setActive(page) {
    document.querySelectorAll('.topbar-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
    const label = document.getElementById('appbar-page');
    if (label) label.textContent = this.pageNames[page] || 'Início';
  },

  initThemeButton() {
    const root = document.documentElement, btn = document.getElementById('theme-toggle'), icon = document.getElementById('theme-icon');
    if (!btn) return;
    const sync = () => {
      const light = root.classList.contains('theme-light');
      icon.innerHTML = light ? AppIcons.sun : AppIcons.moon;
      btn.title = light ? 'Ativar tema escuro' : 'Ativar tema claro';
      btn.setAttribute('aria-label', btn.title);
    };
    btn.onclick = () => {
      root.classList.toggle('theme-light');
      localStorage.setItem('generator-theme', root.classList.contains('theme-light') ? 'light' : 'dark');
      sync();
    };
    sync();
  },

  initGroups() {
    document.querySelectorAll('[data-group-toggle]').forEach(btn => {
      btn.onclick = () => {
        const group = btn.closest('.sidebar-group');
        group.classList.toggle('collapsed');
        btn.textContent = group.classList.contains('collapsed') ? '+' : '−';
        btn.setAttribute('aria-label', group.classList.contains('collapsed') ? 'Expandir categoria' : 'Recolher categoria');
      };
    });
  },

  initSidebarResizer() {
    const resizer = document.querySelector('[data-sidebar-resizer]');
    if (!resizer) return;

    const root = document.documentElement;
    const minWidth = 76;
    const maxWidth = 420;
    const compactWidth = 180;
    let activePointer = null;

    const setWidth = (width, persist = false) => {
      const nextWidth = Math.min(maxWidth, Math.max(minWidth, Math.round(width)));
      root.style.setProperty('--sidebar-w', `${nextWidth}px`);
      resizer.closest('.sidebar').classList.toggle('compact', nextWidth <= compactWidth);
      resizer.setAttribute('aria-valuenow', String(nextWidth));
      if (persist) localStorage.setItem('generator-sidebar-width', String(nextWidth));
    };

    const savedWidth = Number(localStorage.getItem('generator-sidebar-width'));
    if (Number.isFinite(savedWidth) && savedWidth > 0) setWidth(savedWidth);

    resizer.addEventListener('pointerdown', event => {
      if (event.button !== 0 || window.innerWidth <= 1080) return;
      event.preventDefault();
      activePointer = event.pointerId;
      resizer.setPointerCapture(activePointer);
      document.body.classList.add('sidebar-resizing');
    });

    resizer.addEventListener('pointermove', event => {
      if (event.pointerId === activePointer) setWidth(event.clientX);
    });

    const stopResizing = event => {
      if (event.pointerId !== activePointer) return;
      activePointer = null;
      document.body.classList.remove('sidebar-resizing');
      setWidth(parseFloat(getComputedStyle(root).getPropertyValue('--sidebar-w')), true);
    };
    resizer.addEventListener('pointerup', stopResizing);
    resizer.addEventListener('pointercancel', stopResizing);

    resizer.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const currentWidth = parseFloat(getComputedStyle(root).getPropertyValue('--sidebar-w'));
      setWidth(currentWidth + (event.key === 'ArrowRight' ? 16 : -16), true);
    });
  },

  initDrawer() {
    const sidebar = document.getElementById('topbar');
    const backdrop = document.getElementById('nav-backdrop');
    const toggle = document.getElementById('menu-toggle');
    if (!sidebar || !backdrop || !toggle) return;
    const setOpen = open => {
      sidebar.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    toggle.onclick = () => setOpen(!sidebar.classList.contains('open'));
    backdrop.onclick = () => setOpen(false);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    sidebar.addEventListener('click', e => { if (e.target.closest('[data-route]')) setOpen(false); });
  }
};
