window.AppIcons = {
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  cpf:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h5M7 13h3M15 9h3M15 13h3"/></svg>',
  company:'<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M4 21h16M8 7h2M12 7h2M8 11h2M12 11h2M8 15h2M12 15h2M18 21v-8h2v8"/></svg>',
  identity:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M6 16c.8-2 5.2-2 6 0M14 9h4M14 13h4"/></svg>',
  pin:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  license:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M12 9h6M12 13h6M12 16h4"/></svg>',
  car:'<svg viewBox="0 0 24 24"><path d="m5 11 2-5h10l2 5M3 11h18v7H3zM6 18v2M18 18v2M6 14h.01M18 14h.01"/></svg>',
  card:'<svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M3 9h18M6 15h4"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 5h4M10 18h4"/></svg>',
  ballot:'<svg viewBox="0 0 24 24"><path d="M6 3h12v18H6z"/><path d="m9 8 1.5 1.5L14 6M9 13h6M9 17h6"/></svg>',
  person:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 21c.7-5 3.2-7 7-7s6.3 2 7 7"/></svg>',
  code:'<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>',
  sun:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>',
  moon:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>'
};

window.AppTopbar = {
  render(active) {
    const groups=[
      {title:'Geradores',links:[['cpf','CPF','cpf'],['cnpj','CNPJ','company'],['rg','RG','identity'],['cep','CEP','pin']]},
      {title:'Documentos',links:[['cnh','CNH','license'],['titulo','Título eleitoral','ballot']]},
      {title:'Veículos',links:[['chassi','Chassi / VIN','car']]},
      {title:'Dados',links:[['celular','Número','phone'],['pessoa','Pessoa física','person'],['empresa','Empresa','company'],['endereco','Endereço','pin']]},
      {title:'Dev',links:[['codificadores','Codificadores','code'],['decodificador','Decodificador','code']]}
    ];
    const link=([key,label,icon])=>`<button type="button" data-route="${key}" data-page="${key}" class="topbar-link ${active===key?'active':''}"><span class="nav-icon">${AppIcons[icon]}</span><span>${label}</span></button>`;
    return `<aside class="sidebar" id="topbar">
      <div class="brand"><div class="brand-mark brand-logo-mark"><img src="./public/img/logo-icon.png" alt="" aria-hidden="true"></div><div><strong>Generator</strong><span>Brazilian data tools</span></div></div>
      <nav class="sidebar-home">${link(['home','Início','home'])}</nav>
      <div class="sidebar-scroll">${groups.map((g,i)=>`<section class="sidebar-group" data-group="${i}"><div class="sidebar-label-row"><button class="group-toggle" type="button" data-group-toggle="${i}" aria-label="Minimizar categoria">−</button><div class="sidebar-label">${g.title}</div></div><nav class="sidebar-nav">${g.links.map(link).join('')}</nav></section>`).join('')}</div>
      <div class="sidebar-bottom"></div>
    </aside>
    <header class="appbar"><div class="window-actions"><button type="button" class="circle-button" aria-label="Voltar" onclick="history.back()">${AppIcons.arrowLeft}</button><button type="button" class="circle-button" aria-label="Avançar" onclick="history.forward()">${AppIcons.arrowRight}</button></div><div class="appbar-title"><span class="status-dot"></span><span>Ferramentas de desenvolvimento</span></div><button type="button" id="theme-toggle" class="theme-toggle appbar-theme" aria-label="Alternar tema" title="Alternar tema"><span class="nav-icon" id="theme-icon">${AppIcons.moon}</span></button></header>`;
  },
  moveIndicator(){},
  setActive(page){document.querySelectorAll('.topbar-link').forEach(l=>l.classList.toggle('active',l.dataset.page===page));},
  initThemeButton(){
    const root=document.documentElement,btn=document.getElementById('theme-toggle'),icon=document.getElementById('theme-icon'); if(!btn)return;
    const sync=()=>{const light=root.classList.contains('theme-light');icon.innerHTML=light?AppIcons.moon:AppIcons.sun;btn.title=light?'Ativar tema escuro':'Ativar tema claro';};
    btn.onclick=()=>{root.classList.toggle('theme-light');localStorage.setItem('generator-theme',root.classList.contains('theme-light')?'light':'dark');sync();}; sync();
  },
  initGroups(){
    document.querySelectorAll('[data-group-toggle]').forEach(btn=>{btn.onclick=()=>{const group=btn.closest('.sidebar-group');group.classList.toggle('collapsed');btn.textContent=group.classList.contains('collapsed')?'+':'−';btn.setAttribute('aria-label',group.classList.contains('collapsed')?'Expandir categoria':'Minimizar categoria');};});
  }
};