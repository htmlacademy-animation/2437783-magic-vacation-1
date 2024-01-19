export default () => {
  window.addEventListener(`load`, () => {
    const Body = document.querySelector(`body`);
    Body.classList.add(`loaded`);
    if (Body.classList.contains(`loaded`)) {
      const Footer = document.querySelector(`.screen__footer`);
      const Logo = document.querySelector(`.page-header__logo`);
      const SocialBlockToggler = document.querySelector(`.social-block__toggler`);
      const HeaderNav = document.querySelector(`.page-header__nav`);
      HeaderNav.classList.add(`page-header-nav_animation`);
      Footer.classList.add(`animation_footer`);
      Logo.classList.add(`animation_logo`);
      SocialBlockToggler.classList.add(`social-block_animation`);
    }
  });
};
