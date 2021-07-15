window.onload = () => {
    let main = document.querySelector('main');
    let banner = document.querySelector('.banner');
    main.addEventListener('scroll', (e) => {
        console.log('yes');
    }, {once: true});
}