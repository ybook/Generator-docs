<<<<<<< HEAD
window.AppThemeCord = {
  render() { return ''; },
  init() {
    if (localStorage.getItem('generator-theme') === 'light') document.documentElement.classList.add('theme-light');
    else document.documentElement.classList.remove('theme-light');
    AppTopbar.initThemeButton();
    AppTopbar.initGroups();
    AppTopbar.initSidebarResizer();
    AppTopbar.initDrawer();
  }
};
=======
window.AppThemeCord={render(){return '';},init(){if(localStorage.getItem('generator-theme')==='light')document.documentElement.classList.add('theme-light');else document.documentElement.classList.remove('theme-light');AppTopbar.initThemeButton();AppTopbar.initGroups();}};
>>>>>>> 48fe28230c3e3990b0db0726d5e1a6ad2a4a7b22
