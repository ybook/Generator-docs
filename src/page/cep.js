<<<<<<< HEAD
window.AppPages = window.AppPages || {};

window.AppPages.cep = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de CEP</h1>
      <p>Escolha estado e cidade, carregue os logradouros que a API retornar e selecione uma rua ou deixe a escolha aleatória.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Consulta</span><h2>Localização</h2></div>
        <span class="live-badge">ViaCEP</span>
      </div>
      <div class="field">
        <label>Estado</label>
        <select id="cep-state">${AppLocation.stateOptions('SP')}</select>
      </div>
      <div class="field">
        <label>Cidade</label>
        <select id="cep-city"><option value="">Selecione um estado</option></select>
      </div>
      <div class="field">
        <label>Rua disponível na API</label>
        <div class="inline-control">
          <select id="cep-street-select"><option value="">Carregue as ruas da cidade</option></select>
          <button id="cep-load-streets" class="mini-action" type="button">Carregar ruas</button>
        </div>
      </div>
      <div class="field checkbox-field">
        <label><input type="checkbox" id="cep-random" checked><span>Escolher uma rua aleatória entre os resultados</span></label>
      </div>
      <div class="actions">
        <button id="search-cep" class="primary-action">Gerar CEP <span>↗</span></button>
        <button id="copy-cep" class="secondary-action">Copiar CEP</button>
      </div>
      <div class="notice">
        <strong>Resultados reais da consulta</strong>
        <span>O seletor é preenchido apenas com logradouros e CEPs devolvidos pela API para a cidade escolhida.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>CEP</span>
      </div>
      <h2 id="cep-result">—</h2>
      <p id="cep-address-result">Selecione estado e cidade e carregue as ruas.</p>
      <div id="cep-result-list" class="api-results"></div>
      <div class="result-footer">
        <span id="cep-status">Nenhuma consulta</span>
        <button type="button" class="ghost-copy" data-copy-target="cep-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
=======
window.AppPages=window.AppPages||{};
window.AppPages.cep=()=>`<section class="generator-page"><div class="generator-top"><div><span class="eyebrow">LOCALIZAÇÃO • CEP</span><h1>Gerador de CEP</h1><p>Escolha estado e cidade, carregue os logradouros que a API retornar e selecione uma rua ou deixe a escolha aleatória.</p></div><button class="small-action" data-route="home">← Biblioteca</button></div><div class="generator-layout"><div class="generator-card"><div class="card-title-row"><div><small>CONSULTA</small><h2>Localização</h2></div><span class="live-badge">VIA CEP</span></div><div class="field"><label>Estado</label><select id="cep-state">${AppLocation.stateOptions('SP')}</select></div><div class="field"><label>Cidade</label><select id="cep-city"><option value="">Selecione um estado</option></select></div><div class="field"><label>Rua disponível na API</label><div class="inline-control"><select id="cep-street-select"><option value="">Carregue as ruas da cidade</option></select><button id="cep-load-streets" class="mini-action" type="button">Carregar ruas</button></div></div><div class="field checkbox-field"><label><input type="checkbox" id="cep-random" checked><span>Escolher uma rua aleatória entre os resultados</span></label></div><div class="actions"><button id="search-cep" class="primary-action">Gerar CEP <span>↗</span></button><button id="copy-cep" class="secondary-action">Copiar CEP</button></div><div class="notice"><strong>Resultados reais da consulta</strong><span>O seletor é preenchido apenas com logradouros e CEPs devolvidos pela API para a cidade escolhida.</span></div></div><div class="result-panel"><div class="result-head"><small>RESULTADO</small><span>CEP</span></div><h2 id="cep-result">—</h2><p id="cep-address-result">Selecione estado e cidade e carregue as ruas.</p><div id="cep-result-list" class="api-results"></div><div class="result-footer"><span id="cep-status">Nenhuma consulta</span><button type="button" class="ghost-copy" data-copy-target="cep-result">Copiar</button></div></div></div></section>`;
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
