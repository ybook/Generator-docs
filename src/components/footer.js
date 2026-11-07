window.AppFooter = {
  render() {
    const year = new Date().getFullYear();

    return `
      <footer class="statusbar" style="position:static">
        <div class="status-track">
          <span class="status-dot"></span>
          <span>Generator</span>
        </div>
        <span class="status-synth">Dados Gerados</span>
        <div class="status-message">© ${year} yBook — uso livre para desenvolvimento</div>
        <div class="status-actions"><span>GEN/BR</span></div>
      </footer>
    `;
  }
};
