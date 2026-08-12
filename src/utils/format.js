window.AppFormat = {
  onlyDigits(value) {
    return String(value).replace(/\D/g, "");
  },

  cpf(value) {
    return this.onlyDigits(value)
      .padStart(11, "0")
      .slice(0, 11)
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  },

  cnpj(value) {
    return this.onlyDigits(value)
      .padStart(14, "0")
      .slice(0, 14)
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  },

  rg(value) {
    return this.onlyDigits(value)
      .padStart(9, "0")
      .slice(0, 9)
      .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  },

  cep(value) {
    return this.onlyDigits(value)
      .padStart(8, "0")
      .slice(0, 8)
      .replace(/(\d{5})(\d{3})/, "$1-$2");
  }
};
