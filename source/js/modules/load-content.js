export default () => {
  window.addEventListener(`load`, () => {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
    if (body.classList.contains(`loaded`)) {
      const footer = document.querySelector(`.screen__footer`);
      const logo = document.querySelector(`.page-header__logo`);
      const socialBlockToggler = document.querySelector(`.social-block__toggler`);
      const headerNav = document.querySelector(`.page-header__nav`);
      const linkLine = document.querySelector(`.page-header__menu`);
      linkLine.classList.add(`page-header__menu_animation`);
      headerNav.classList.add(`page-header-nav_animation`);
      footer.classList.add(`animation_footer`);
      logo.classList.add(`animation_logo`);
      socialBlockToggler.classList.add(`social-block_animation`);
    }
  });
};
