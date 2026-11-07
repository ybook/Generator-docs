<<<<<<< HEAD
window.AppPages = window.AppPages || {};

window.AppPages.endereco = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de endereço</h1>
      <p>Escolha somente estado e cidade. Depois carregue os endereços disponíveis na API e selecione um deles ou deixe o site escolher aleatoriamente.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Localização</span><h2>Região</h2></div>
        <span class="live-badge">CEP + IBGE</span>
      </div>
      <div class="field">
        <label>Estado</label>
        <select id="address-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field">
        <label>Cidade</label>
        <select id="address-city"><option value="">Selecione...</option></select>
      </div>
      <div class="field">
        <label>Endereço disponível na API</label>
        <div class="inline-control">
          <select id="address-choice"><option value="">Carregue os endereços da cidade</option></select>
          <button id="address-load" class="mini-action" type="button">Carregar</button>
        </div>
      </div>
      <div class="field checkbox-field">
        <label><input type="checkbox" id="address-random" checked><span>Escolher um endereço aleatório</span></label>
      </div>
      <div class="actions">
        <button id="generate-endereco" class="primary-action">Gerar endereço <span>↗</span></button>
        <button id="copy-endereco" class="secondary-action">Copiar resultado</button>
      </div>
      <div class="notice">
        <strong>Endereço consultado</strong>
        <span>Logradouro, bairro, cidade e CEP vêm da API; somente o número residencial é gerado localmente.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>ENDEREÇO</span>
      </div>
      <h2 id="generic-result">—</h2>
      <p id="endereco-meta">Selecione estado e cidade.</p>
      <div class="result-footer">
        <span>✓ Endereço retornado pela API</span>
        <button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
=======
window.AppPages=window.AppPages||{};
window.AppPages.endereco=()=>`<section class="generator-page"><div class="generator-top"><div><span class="eyebrow">LOCALIZAÇÃO • ENDEREÇO</span><h1>Gerador de endereço</h1><p>Escolha somente estado e cidade. Depois carregue os endereços disponíveis na API e selecione um deles ou deixe o site escolher aleatoriamente.</p></div><button class="small-action" data-route="home">← Biblioteca</button></div><div class="generator-layout"><div class="generator-card"><div class="card-title-row"><div><small>LOCALIZAÇÃO</small><h2>Região</h2></div><span class="live-badge">CEP + IBGE</span></div><div class="field"><label>Estado</label><select id="address-state">${AppLocation.stateOptions('SP')}</select></div><div class="field"><label>Cidade</label><select id="address-city"><option value="">Selecione...</option></select></div><div class="field"><label>Endereço disponível na API</label><div class="inline-control"><select id="address-choice"><option value="">Carregue os endereços da cidade</option></select><button id="address-load" class="mini-action" type="button">Carregar</button></div></div><div class="field checkbox-field"><label><input type="checkbox" id="address-random" checked><span>Escolher um endereço aleatório</span></label></div><div class="actions"><button id="generate-endereco" class="primary-action">Gerar endereço <span>↗</span></button><button id="copy-endereco" class="secondary-action">Copiar</button></div><div class="notice"><strong>Endereço consultado</strong><span>Logradouro, bairro, cidade e CEP vêm da API; somente o número residencial é gerado localmente.</span></div></div><div class="result-panel"><div class="result-head"><small>RESULTADO</small><span>ENDEREÇO</span></div><h2 id="generic-result">—</h2><p id="endereco-meta">Selecione estado e cidade.</p><div class="result-footer"><span>✓ Endereço retornado pela API</span><button class="ghost-copy" data-copy-target="generic-result">Copiar</button></div></div></div></section>`;
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
