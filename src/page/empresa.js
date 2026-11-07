<<<<<<< HEAD
window.AppPages = window.AppPages || {};

window.AppPages.empresa = () => `
<section class="generator-page">
  <div class="generator-top">
    <div>
=======
window.AppPages=window.AppPages||{};
window.AppPages.empresa=()=>`<section class="generator-page">
  <div class="generator-top">
    <div>
      <span class="eyebrow">DADOS • EMPRESA</span>
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <h1>Gerador de empresa</h1>
      <p>Cria um perfil empresarial com localização escolhida, endereço consultado com CEP e os principais dados de cadastro.</p>
    </div>
    <button class="small-action" data-route="home">← Biblioteca</button>
  </div>

  <div class="generator-layout">
    <div class="generator-card">
      <div class="card-title-row">
<<<<<<< HEAD
        <div><span class="mono-label">Perfil</span><h2>Localização e atividade</h2></div>
        <span class="live-badge">Cadastro completo</span>
      </div>
=======
        <div><small>PERFIL</small><h2>Localização e atividade</h2></div>
        <span class="live-badge">FORMATO</span>
      </div>

>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <div class="field">
        <label>Estado</label>
        <select id="company-state">${AppLocation.stateOptions('SP')}</select>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <div class="field">
        <label>Cidade</label>
        <select id="company-city"><option value="">Carregando...</option></select>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <div class="field">
        <label>Setor</label>
        <select id="company-sector">
          <option value="tech">Tecnologia</option>
          <option value="retail">Varejo</option>
          <option value="services">Serviços</option>
          <option value="industry">Indústria</option>
          <option value="health">Saúde</option>
          <option value="education">Educação</option>
          <option value="transport">Transporte e logística</option>
          <option value="construction">Construção</option>
          <option value="food">Alimentação</option>
          <option value="finance">Serviços financeiros</option>
        </select>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <div class="actions">
        <button id="generate-empresa" class="primary-action">Gerar empresa <span>↗</span></button>
        <button id="copy-empresa" class="secondary-action">Copiar tudo</button>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
      <div class="notice">
        <strong>Perfil empresarial fictício</strong>
        <span>O CEP/logradouro pode vir da base pública usada pelo site; número e demais dados cadastrais são gerados localmente.</span>
      </div>
    </div>

    <div class="result-panel credential-panel">
<<<<<<< HEAD
      <div class="result-head">
        <span class="mono-label">Resultado</span>
        <span>EMPRESA</span>
      </div>
      <div class="profile-fields company-profile-fields">
        <div class="profile-field profile-wide"><small>Razão social</small><strong id="company-legal-name">—</strong></div>
        <div class="profile-field"><small>Nome fantasia</small><strong id="company-trade-name">—</strong></div>
        <div class="profile-field"><small>CNPJ</small><strong id="company-cnpj">—</strong></div>
        <div class="profile-field"><small>Situação</small><strong id="company-status">—</strong></div>
        <div class="profile-field"><small>Abertura</small><strong id="company-opened">—</strong></div>
        <div class="profile-field"><small>Natureza jurídica</small><strong id="company-legal-nature">—</strong></div>
        <div class="profile-field"><small>Atividade principal</small><strong id="company-activity">—</strong></div>
        <div class="profile-field"><small>Capital social</small><strong id="company-capital">—</strong></div>
        <div class="profile-field"><small>Inscrição estadual</small><strong id="company-state-registration">—</strong></div>
        <div class="profile-field"><small>Telefone</small><strong id="company-phone">—</strong></div>
        <div class="profile-field profile-wide"><small>E-mail</small><strong id="company-email">—</strong></div>
        <div class="profile-field profile-wide"><small>Endereço + CEP</small><strong id="company-address">—</strong></div>
      </div>
      <p id="empresa-meta">Selecione estado e cidade.</p>
      <div class="result-footer">
        <span>✓ Dados empresariais organizados</span>
        <button type="button" id="company-copy-all-bottom" class="ghost-copy">Copiar tudo</button>
      </div>
    </div>
  </div>
</section>`;
=======
      <div class="result-head"><small>RESULTADO</small><span>EMPRESA</span></div>

      <div class="profile-fields company-profile-fields">
        <div class="profile-field profile-wide"><small>RAZÃO SOCIAL</small><strong id="company-legal-name">—</strong></div>
        <div class="profile-field"><small>NOME FANTASIA</small><strong id="company-trade-name">—</strong></div>
        <div class="profile-field"><small>CNPJ</small><strong id="company-cnpj">—</strong></div>
        <div class="profile-field"><small>SITUAÇÃO</small><strong id="company-status">—</strong></div>
        <div class="profile-field"><small>ABERTURA</small><strong id="company-opened">—</strong></div>
        <div class="profile-field"><small>NATUREZA JURÍDICA</small><strong id="company-legal-nature">—</strong></div>
        <div class="profile-field"><small>ATIVIDADE PRINCIPAL</small><strong id="company-activity">—</strong></div>
        <div class="profile-field"><small>CAPITAL SOCIAL</small><strong id="company-capital">—</strong></div>
        <div class="profile-field"><small>INSCRIÇÃO ESTADUAL</small><strong id="company-state-registration">—</strong></div>
        <div class="profile-field"><small>TELEFONE</small><strong id="company-phone">—</strong></div>
        <div class="profile-field profile-wide"><small>E-MAIL</small><strong id="company-email">—</strong></div>
        <div class="profile-field profile-wide"><small>ENDEREÇO + CEP</small><strong id="company-address">—</strong></div>
      </div>

      <p id="empresa-meta">Selecione estado e cidade.</p>
      <div class="result-footer"><span>✓ Dados empresariais organizados</span><button id="company-copy-all-bottom" class="ghost-copy">Copiar tudo</button></div>
    </div>
  </div>
</section>`;
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
