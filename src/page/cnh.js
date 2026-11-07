window.AppPages = window.AppPages || {};

window.AppPages.cnh = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de CNH</h1>
      <p>Gera numeração com dígitos de verificação, estado emissor e categoria selecionáveis.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Configuração</span><h2>Perfil</h2></div>
        <span class="live-badge">Formato BR</span>
      </div>
      <div class="field">
        <label>Estado emissor</label>
        <select id="cnh-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field">
        <label>Categoria</label>
        <select id="cnh-cat">
          <option value="ACC">ACC — ciclomotor</option>
          <option value="A">A — moto</option>
          <option value="B" selected>B — carro</option>
          <option value="AB">AB — moto + carro</option>
          <option value="C">C — caminhão</option>
          <option value="D">D — ônibus / passageiros</option>
          <option value="E">E — veículos articulados</option>
        </select>
      </div>
      <div class="actions">
        <button id="generate-cnh" class="primary-action">Gerar CNH <span>↗</span></button>
        <button id="copy-cnh" class="secondary-action">Copiar resultado</button>
      </div>
      <div class="notice">
        <strong>Uso seguro</strong>
        <span>A numeração é fictícia e marcada como genérica. Não representa uma carteira de habilitação emitida.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>CNH</span>
      </div>
      <h2 id="generic-result">00000000000</h2>
      <p id="cnh-meta">Perfil</p>
      <div class="result-footer">
        <span>✓ Categoria explicada</span>
        <button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
