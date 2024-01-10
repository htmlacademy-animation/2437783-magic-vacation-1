export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let socialBlockli = document.querySelectorAll(`.social-block__list li`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    socialBlockli[0].classList.add(`visble1`);
    socialBlockli[1].classList.add(`visble2`);
    socialBlockli[2].classList.add(`visble3`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    socialBlockli[0].classList.remove(`visble1`);
    socialBlockli[1].classList.remove(`visble2`);
    socialBlockli[2].classList.remove(`visble3`);
  });
};
