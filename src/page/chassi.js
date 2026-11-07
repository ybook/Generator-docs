window.AppPages = window.AppPages || {};

window.AppPages.chassi = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
      <h1>Gerador de chassi</h1>
      <p>Escolha primeiro a região geográfica e a categoria do veículo; depois o site carrega os países disponíveis para a região selecionada.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
        <div><span class="mono-label">Personalização</span><h2>Origem e categoria</h2></div>
        <span class="live-badge">Fluxo em etapas</span>
      </div>

      <div class="field">
        <label>Continente / região</label>
        <select id="vin-continent">
          <option value="">Selecione</option>
          <option value="north-america">América do Norte</option>
          <option value="central-america">América Central</option>
          <option value="caribbean">Caribe</option>
          <option value="south-america">América do Sul</option>
          <option value="europe">Europa</option>
          <option value="asia">Ásia</option>
          <option value="oceania">Oceania</option>
          <option value="middle-east">Oriente Médio</option>
        </select>
      </div>

      <div class="field">
        <label>Categoria do veículo</label>
        <select id="vin-category">
          <option value="">Selecione</option>
          <optgroup label="Passeio">
            <option>Automóvel</option><option>Hatch</option><option>Sedã</option><option>Coupé</option>
            <option>Conversível</option><option>SUV</option><option>Picape</option><option>Van</option><option>Minivan</option>
          </optgroup>
          <optgroup label="Duas, três e quatro rodas">
            <option>Motocicleta</option><option>Ciclomotor</option><option>Scooter</option><option>Triciclo</option><option>Quadriciclo</option>
          </optgroup>
          <optgroup label="Transporte coletivo">
            <option>Micro-ônibus</option><option>Ônibus</option>
          </optgroup>
          <optgroup label="Carga e implementos">
            <option>Caminhão leve</option><option>Caminhão médio</option><option>Caminhão pesado</option>
            <option>Cavalo mecânico</option><option>Reboque</option><option>Semirreboque</option>
          </optgroup>
          <optgroup label="Trabalho e especiais">
            <option>Motorhome</option><option>Máquina agrícola</option><option>Máquina de construção</option><option>Veículo especial</option>
          </optgroup>
        </select>
      </div>

      <div class="field vin-country-field is-hidden" id="vin-country-field">
        <label>País de origem</label>
        <select id="vin-country" disabled><option value="">Selecione região e categoria</option></select>
        <small class="field-hint" id="vin-country-status">Aguardando seleção.</small>
      </div>

      <div class="actions">
        <button id="generate-chassi" class="primary-action" disabled>Gerar identificador <span>↗</span></button>
        <button id="copy-chassi" class="secondary-action">Copiar resultado</button>
      </div>

      <div class="notice">
        <strong>VIN de protótipo</strong>
        <span>Países são carregados por uma fonte externa com uma lista local de contingência. O identificador é fictício.</span>
      </div>
    </div>

    <div class="result-panel">
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>CHASSI</span>
      </div>
      <h2 id="generic-result">00000000000000000</h2>
      <p id="chassi-meta">Selecione região, categoria e país.</p>
      <div class="result-footer">
        <span>✓ Fluxo em etapas</span>
        <button type="button" class="ghost-copy" data-copy-target="generic-result">Copiar</button>
      </div>
    </div>
  </div>
</section>`;
