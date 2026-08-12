window.AppFooter = {
  render() {
    const year = new Date().getFullYear();

    return `
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