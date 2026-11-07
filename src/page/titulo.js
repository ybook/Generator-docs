window.AppPages = window.AppPages || {};

window.AppPages.titulo = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de título eleitoral</h1>
      <p>Gera numeração com UF selecionável e zona eleitoral opcional.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Configuração</span><h2>Localização</h2></div>
        <span class="live-badge">Formato TSE</span>
      </div>
      <div class="field">
        <label>Estado</label>
        <select id="titulo-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field">
        <label>Zona</label>
        <select id="titulo-zone">
          <option value="random">Aleatória</option>
          <option value="capital">Capital</option>
          <option value="interior">Interior</option>
        </select>
      </div>
      <div class="actions">
        <button id="generate-titulo" class="primary-action">Gerar título <span>↗</span></button>
        <button id="copy-titulo" class="secondary-action">Copiar resultado</button>
      </div>
      <div class="notice">
        <strong>Uso seguro</strong>
        <span>Todo resultado é fictício e marcado como numeração genérica, para não representar um título eleitoral emitido.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>TÍTULO</span>
      </div>
      <h2 id="generic-result">0000 0000 0000</h2>
      <p id="titulo-meta">Estado • zona</p>
      <div class="result-footer">
        <span>✓ Estrutura por UF</span>
        <button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
