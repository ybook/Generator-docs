(function () {
  const app = document.getElementById("app");
  const pages = ["home", "cpf", "cnpj", "rg", "cep", "cnh", "chassi", "celular", "titulo", "pessoa", "empresa", "endereco", "codificadores", "decodificador"];

  app.innerHTML = `
    ${AppTopbar.render(getPage())}
    ${AppThemeCord.render()}

    <main class="workspace">
      <div id="page-root"></div>
    </main>

    <footer class="statusbar">
      <div class="status-track">
        <span class="status-dot"></span>
        <span>Generator</span>
      </div>
      <span class="status-synth">Dados Gerados para testes</span>
      <div class="status-message">Online</div>
      <div class="status-actions"><span id="status-page">Generator</span></div>
    </footer>
  `;

  const pageRoot = document.getElementById("page-root");
  AppThemeCord.init();

  function getPage() {
    const page = location.hash.replace("#", "") || "home";
    return pages.includes(page) ? page : "home";
  }

  function mount(page) {
    const template = AppPages[page];
    pageRoot.innerHTML = template();
    if (AppServices[page]) AppServices[page]();
    AppTopbar.setActive(page);
    document.getElementById("status-page").textContent = page === "home" ? "Início" : page.toUpperCase();
  }

  function render() {
    const page = getPage();
    AppTopbar.setActive(page);
    mount(page);
  }

  document.addEventListener("click", event => {
    const routeElement = event.target.closest("[data-route]");
    const urlElement = event.target.closest("[data-url]");
    const copyElement = event.target.closest("[data-copy-target]");

    if (copyElement) {
      const target = document.getElementById(copyElement.dataset.copyTarget);
      if (target) AppCopy.text(target.textContent, copyElement);
      return;
    }

    if (routeElement) {
      const route = routeElement.dataset.route;
      if (route && location.hash !== `#${route}`) {
        location.hash = route;
      }
      return;
    }

    if (urlElement) {
      const url = urlElement.dataset.url;
      if (url) window.open(url, "_blank", "noopener,noreferrer");
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("resize", () => AppTopbar.moveIndicator());
  render();
})();
