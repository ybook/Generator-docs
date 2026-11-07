window.AppPages = window.AppPages || {};

window.AppPages.pessoa = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de pessoa física</h1>
      <p>Cria um perfil coerente com nome, número, CPF, RG, título eleitoral, idade, nascimento e endereço consultado com CEP.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Perfil</span><h2>Localização</h2></div>
        <span class="live-badge">Perfil coerente</span>
      </div>
      <div class="field">
        <label>Estado</label>
        <select id="person-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field">
        <label>Cidade</label>
        <select id="person-city"><option value="">Carregando...</option></select>
      </div>
      <div class="actions">
        <button id="generate-pessoa" class="primary-action">Gerar pessoa <span>↗</span></button>
        <button id="copy-pessoa" class="secondary-action">Copiar tudo</button>
      </div>
      <div class="notice">
        <strong>Perfil fictício</strong>
        <span>O endereço/CEP pode vir da base pública de CEP; o número residencial é gerado localmente.</span>
      </div>
    </div>

    <div class="result-panel credential-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>PESSOA</span>
      </div>
      <div id="person-fields" class="profile-fields">
        <div class="profile-field"><small>Nome</small><strong id="person-name">—</strong></div>
        <div class="profile-field"><small>Número</small><strong id="person-phone">—</strong></div>
        <div class="profile-field"><small>CPF</small><strong id="person-cpf">—</strong></div>
        <div class="profile-field"><small>RG</small><strong id="person-rg">—</strong></div>
        <div class="profile-field"><small>Título eleitoral</small><strong id="person-title">—</strong></div>
        <div class="profile-field"><small>Idade</small><strong id="person-age-result">—</strong></div>
        <div class="profile-field"><small>Nascimento</small><strong id="person-birth">—</strong></div>
        <div class="profile-field profile-wide"><small>Endereço + CEP</small><strong id="person-address">—</strong></div>
      </div>
      <p id="pessoa-meta">Selecione estado e cidade.</p>
      <div class="result-footer">
        <span>✓ Idade e nascimento consistentes</span>
        <button type="button" id="person-copy-all-bottom" class="ghost-copy">Copiar tudo</button>
      </div>
    </div>
  </div>
</section>`;
