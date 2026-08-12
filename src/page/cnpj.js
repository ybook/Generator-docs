window.AppPages = window.AppPages || {};

window.AppPages.cnpj = function () {
  return `
    <section class="generator-page">
      <div class="generator-top"><div><span class="eyebrow">EMPRESA • CNPJ</span><h1>Gerador de CNPJ</h1><p>Gere CNPJs fictícios nos formatos numérico ou alfanumérico.</p></div><button class="small-action" data-route="home">← Biblioteca</button></div>
      <div class="generator-layout">
        <div class="generator-card">
          <div class="card-title-row"><div><small>CONFIGURAÇÃO</small><h2>Formato</h2></div><span class="live-badge">● ONLINE</span></div>
          <div class="field"><label>Tipo de CNPJ</label><div class="option-tabs" id="cnpj-type-tabs"><button type="button" class="option-tab active" data-cnpj-type="numeric">Numérico</button><button type="button" class="option-tab" data-cnpj-type="alpha">Alfanumérico</button></div></div>
          <div class="field checkbox-field"><label><input type="checkbox" id="cnpj-mask" checked><span>Gerar com pontuação</span></label></div>
          <div class="actions"><button id="generate-cnpj" class="primary-action">Gerar CNPJ <span>↗</span></button><button id="copy-cnpj" class="secondary-action">Copiar resultado</button></div>
          <div class="notice"><strong>Uso seguro</strong><span></span></div>
        </div>
        <div class="result-panel"><div class="result-head"><small>RESULTADO ATUAL</small><span>CNPJ</span></div><h2 id="cnpj-result">00.000.000/0000-00</h2><p id="cnpj-meta">Formato atual: numérico.</p><div class="result-footer"><span>✓ Cálculo de validação ativo</span><button type="button" class="ghost-copy" data-copy-target="cnpj-result">Copiar</button></div></div>
      </div>
    </section>
  `;
};
