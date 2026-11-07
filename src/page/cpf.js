window.AppPages = window.AppPages || {};

window.AppPages.cpf = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de CPF</h1>
      <p>Gera um CPF com dígitos verificadores corretos. A escolha de estado é opcional e serve apenas para selecionar a região fiscal.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Configuração</span><h2>Formato</h2></div>
        <span class="live-badge">Validação ativa</span>
      </div>
      <div class="field">
        <label>Região fiscal (opcional)</label>
        <select id="cpf-state"><option value="">Aleatório</option>${AppLocation.stateOptions()}</select>
      </div>
      <div class="field checkbox-field">
        <label><input type="checkbox" id="cpf-mask" checked><span>Gerar com pontuação</span></label>
      </div>
      <div class="control-help">A máscara altera imediatamente o CPF que já está na tela.</div>
      <div class="actions">
        <button id="generate-cpf" class="primary-action">Gerar CPF <span>↗</span></button>
        <button id="copy-cpf" class="secondary-action">Copiar resultado</button>
      </div>
      <div class="notice">
        <strong>Uso seguro</strong>
        <span>O CPF gerado é fictício e não corresponde a nenhuma pessoa real. Destina-se a desenvolvimento, testes e prototipação.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado atual</span>
        <span>CPF</span>
      </div>
      <h2 id="cpf-result">000.000.000-00</h2>
      <p id="cpf-meta">Região fiscal: aleatória</p>
      <div class="result-footer">
        <span>✓ Dígitos verificadores calculados</span>
        <button type="button" class="ghost-copy" data-copy-target="cpf-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
