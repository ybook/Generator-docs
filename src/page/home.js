window.AppPages=window.AppPages||{};
window.AppPages.home=()=>`<section class="home-page home-minimal">
  <div class="hero hero-clean">
    <div>
      <h1>Ferramentas em um só lugar.</h1>
      <p>Geradores, consultas e utilitários para desenvolvimento e testes. Open-Source. Use com responsabilidade.</p>
    </div>
  </div>

  <div class="section-heading section-heading-simple">
    <h2>Ferramentas</h2>
  </div>

  <div class="home-grid home-grid-visual">${[
    ["cpf","CPF","cpf"],
    ["cnpj","CNPJ","cnpj"],
    ["rg","RG","rg"],
    ["cep","CEP","cep"],
    ["cnh","CNH","cnh"],
    ["chassi","Chassi","chassi"],
    ["celular","Número","celular"],
    ["titulo","Título eleitoral","titulo"],
    ["pessoa","Pessoa física","pessoa"],
    ["empresa","Empresa","empresa"],
    ["endereco","Endereço","endereco"],
    ["codificadores","Codificadores","codificadores"],
    ["decodificador","Decodificador","decodificador"]
  ].map(([route,title,image])=>`<button type="button" data-route="${route}" class="home-card home-card-visual"><div class="card-cover card-cover-image"><img src="./public/img/cards/${image}.svg" alt="" loading="lazy" decoding="async"></div><div class="card-body card-body-minimal"><h2>${title}</h2></div><div class="card-play" aria-hidden="true">${AppIcons.arrowRight}</div></button>`).join("")}</div>
</section>`;
