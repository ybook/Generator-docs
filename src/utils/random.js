window.AppRandom = {
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  choice(array) { return array[Math.floor(Math.random() * array.length)]; },

  digits(length) {
    return Array.from({ length }, () => this.rand(0, 9)).join("");
  }
};
