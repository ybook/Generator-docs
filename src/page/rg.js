window.AppPages = window.AppPages || {};

window.AppPages.rg = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de RG</h1>
      <p>O RG varia por órgão emissor; escolha a UF e o formato de exibição.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Configuração</span><h2>Estado emissor</h2></div>
        <span class="live-badge">Formato por UF</span>
      </div>
      <div class="field">
        <label>Estado</label>
        <select id="rg-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field checkbox-field">
        <label><input type="checkbox" id="rg-mask" checked><span>Gerar com pontuação</span></label>
      </div>
      <div class="actions">
        <button id="generate-rg" class="primary-action">Gerar RG <span>↗</span></button>
        <button id="copy-rg" class="secondary-action">Copiar resultado</button>
      </div>
      <div class="notice">
        <strong>Uso seguro</strong>
        <span>O RG gerado é fictício e não corresponde a nenhuma pessoa real. Destina-se a desenvolvimento, testes e prototipação.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado atual</span>
        <span>RG</span>
      </div>
      <h2 id="rg-result">00.000.000-0</h2>
      <p id="rg-meta">Estado emissor: São Paulo</p>
      <div class="result-footer">
        <span>✓ Formato por UF</span>
        <button type="button" class="ghost-copy" data-copy-target="rg-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
