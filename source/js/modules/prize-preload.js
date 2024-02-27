export default () => {
    let preload = document.querySelector(`.section_prizes_preload`);
    let sectionPrize = document.querySelector(`.screen--prizes`)
    let headerLink = document.querySelectorAll(`.js-menu-link`);
    headerLink.forEach((el) => {
        el.addEventListener(`click`, function () {
            if (el.getAttribute(`href`) === `#prizes`) {
                preload.classList.add(`pre_active`);
                console.log(el.classList.contains(`active`), 1);
            } else {
                preload.classList.remove(`pre_active`);
                console.log(el.classList.contains(`active`), 2);
    
            }
        })
    })
    // js-menu-link active
};
