window.AppPages = window.AppPages || {};

window.AppPages.home = () => {
  const featured = [
    { route:'cpf',   num:'01', title:'CPF',            desc:'Dígitos verificadores calculados.', img:'./public/img/photos/cpf.png' },
    { route:'cnpj',  num:'02', title:'CNPJ',           desc:'Numérico ou alfanumérico, validação matemática ativa.', img:'./public/img/photos/cnpj.png' },
    { route:'cep',   num:'03', title:'CEP',            desc:'Logradouros reais consultados na base pública ViaCEP.', img:'./public/img/photos/cep.png' },
    { route:'pessoa',num:'04', title:'Pessoa física',  desc:'Perfil completo e coerente: documentos, idade e endereço.', img:'./public/img/photos/pessoa.png' }
  ];

  const index = [
    { route:'rg',            num:'05', title:'RG',                desc:'Formato por órgão emissor e UF selecionável.' },
    { route:'cnh',           num:'06', title:'CNH',               desc:'Numeração com dígitos de verificação e categoria.' },
    { route:'chassi',        num:'07', title:'Chassi / VIN',      desc:'Identificador estrutural por região, categoria e país.' },
    { route:'celular',       num:'08', title:'Número',            desc:'Móvel no formato brasileiro, DDD por região e operadora.' },
    { route:'titulo',        num:'09', title:'Título eleitoral',  desc:'Numeração com UF e zona selecionáveis.' },
    { route:'empresa',       num:'10', title:'Empresa',           desc:'Cadastro empresarial com CNPJ, setor e endereço consultado.' },
    { route:'endereco',      num:'11', title:'Endereço',          desc:'Logradouro, bairro e CEP retornados pela API.' },
    { route:'codificadores', num:'12', title:'Codificadores',     desc:'Base64, hex, Morse, hashes e transformações reversíveis.' },
    { route:'decodificador', num:'13', title:'Decodificador',     desc:'Detecção automática de formato, camadas e alternativas.' }
  ];

  return `
  <section class="home-page">
    <div class="hero">
      <div class="hero-copy">
        <h1 class="hero-title">Ferramentas para desenvolver e testar</h1>
        <p>Gere dados de exemplo e use utilitários práticos direto no navegador.</p>
        <div class="hero-meta">
          <div><strong>13</strong><span>Ferramentas</span></div>
          <div><strong>Sem cadastro</strong><span>Uso direto</span></div>
        </div>
      </div>
    </div>

    <div class="section-heading">
      <div>
        <span class="mono-label">Em destaque</span>
        <h2>Geradores principais</h2>
      </div>
      <span class="section-count">04 / 13</span>
    </div>

    <div class="home-grid">
      ${featured.map(f => `
      <button type="button" data-route="${f.route}" class="home-card">
        <div class="card-cover"><img src="${f.img}" alt="" loading="lazy" decoding="async"></div>
        <div class="card-body">
          <span class="mono-label">${f.num}</span>
          <h2>${f.title}</h2>
          <span>${f.desc}</span>
        </div>
        <div class="card-play" aria-hidden="true">${AppIcons.arrowRight}</div>
      </button>`).join('')}
    </div>

    <div class="section-heading">
      <div>
        <span class="mono-label">Índice completo</span>
        <h2>Todas as ferramentas</h2>
      </div>
      <span class="section-count">13 ferramentas</span>
    </div>

    <nav class="tool-index" aria-label="Todas as ferramentas">
      ${index.map(t => `
      <button type="button" data-route="${t.route}" class="tool-row">
        <span class="tool-num">${t.num}</span>
        <h3>${t.title}</h3>
        <span>${t.desc}</span>
        <span class="tool-arrow" aria-hidden="true">${AppIcons.arrowRight}</span>
      </button>`).join('')}
    </nav>

    <div class="dev-band">
      <div class="dev-band-copy">
        <span class="mono-label" style="color:var(--accent)">Utilitários</span>
        <h2>Codificadores e decodificador automático</h2>
        <p>Transformações reversíveis, hashes e um detector automático que reconhece formatos, camadas e até Morse sem separadores — tudo processado localmente no navegador.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button type="button" class="secondary-action" data-route="codificadores">Abrir codificadores</button>
          <button type="button" class="secondary-action" data-route="decodificador">Abrir decodificador</button>
        </div>
      </div>
      <div class="dev-band-media"><img src="./public/img/photos/dev.jpg" alt="" loading="lazy" decoding="async"></div>
    </div>

    <div class="info-strip">
      <div class="info-icon">${AppIcons.info}</div>
      <div>
        <strong>Uso seguro e responsável</strong>
        <span>Dados gerados para testes e desenvolvimento. Nenhum resultado corresponde a registros reais.</span>
      </div>
    </div>
  </section>`;
};
