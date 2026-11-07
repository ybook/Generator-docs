<<<<<<< HEAD
window.AppPages = window.AppPages || {};

window.AppPages.decodificador = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Decodificador automático</h1>
      <p>Cole o conteúdo. O detector normaliza separadores, tenta formatos reversíveis, múltiplas camadas e até segmentação de Morse quando os espaços foram removidos.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="encoder-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Entrada</span><h2>Texto codificado</h2></div>
        <span class="live-badge">Detecção automática</span>
      </div>
      <textarea id="decode-input" class="codec-input" placeholder="Cole aqui o conteúdo..."></textarea>
      <div class="actions">
        <button id="decode-run" class="primary-action">Detectar e decodificar <span>↗</span></button>
        <button id="decode-clear" class="secondary-action">Limpar</button>
      </div>
      <div class="notice">
        <strong>Melhor esforço</strong>
        <span>Morse sem separadores é matematicamente ambíguo; o detector usa heurísticas de idioma e pode mostrar alternativas quando houver mais de uma leitura plausível.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Saída</span>
        <span id="decode-kind">AGUARDANDO</span>
      </div>
      <pre id="decode-result" class="codec-output">—</pre>
      <div id="decode-alternatives" class="decode-alternatives"></div>
      <div class="result-footer">
        <span id="decode-status">Nenhuma análise</span>
        <button type="button" class="ghost-copy" data-copy-target="decode-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
=======
window.AppPages=window.AppPages||{};
window.AppPages.decodificador=()=>`<section class="generator-page"><div class="generator-top"><div><span class="eyebrow">DEV • DECODIFICADOR</span><h1>Decodificador automático</h1><p>Cole o conteúdo. O detector normaliza separadores, tenta formatos reversíveis, múltiplas camadas e até segmentação de Morse quando os espaços foram removidos.</p></div><button class="small-action" data-route="home">← Biblioteca</button></div><div class="encoder-layout"><div class="generator-card"><div class="card-title-row"><div><small>ENTRADA</small><h2>Texto codificado</h2></div><span class="live-badge">AUTO+</span></div><textarea id="decode-input" class="codec-input" placeholder="Cole aqui o conteúdo..."></textarea><div class="actions"><button id="decode-run" class="primary-action">Detectar e decodificar <span>↗</span></button><button id="decode-clear" class="secondary-action">Limpar</button></div><div class="notice"><strong>Melhor esforço</strong><span>Morse sem separadores é matematicamente ambíguo; o detector usa heurísticas de idioma e pode mostrar alternativas quando houver mais de uma leitura plausível.</span></div></div><div class="result-panel"><div class="result-head"><small>SAÍDA</small><span id="decode-kind">AGUARDANDO</span></div><pre id="decode-result" class="codec-output">—</pre><div id="decode-alternatives" class="decode-alternatives"></div><div class="result-footer"><span id="decode-status">Nenhuma análise</span><button class="ghost-copy" data-copy-target="decode-result">Copiar</button></div></div></div></section>`;
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
