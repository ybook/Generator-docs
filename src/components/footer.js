window.AppFooter = {
  render() {
    const year = new Date().getFullYear();

    return `
<<<<<<< HEAD
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
=======
      <footer class="footer">
        <div class="footer-inner">
          <div>
            <small>GENERATOR</small>
            <p>CPF • CNPJ • RG • CEP</p>
          </div>

          <div class="footer-links">
            <button type="button" data-route="home">Home</button>
            <button type="button" data-route="cpf">CPF</button>
            <button type="button" data-route="cnpj">CNPJ</button>
            <button type="button" data-route="rg">RG</button>
            <button type="button" data-route="cep">CEP</button>
          </div>

          <span>
            © ${year} yBook
          </span>
        </div>
      </footer>
    `;
  }
};
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
