window.addEventListener('load', () => {

    // DOM Element Variables
    let menubar = document.getElementById('menubar');
    
    // create menubar shadow when page is scrolled
    let elevation = window.scrollY === 0 ? 0 : 2;
        menubar.style.cssText = `box-shadow: var(--shadow--${elevation});`;
        window.addEventListener('scroll', () => {
            elevation = window.scrollY === 0 ? 0 : 2;
            menubar.style.cssText = `box-shadow: var(--shadow--${elevation});`;
        });

});