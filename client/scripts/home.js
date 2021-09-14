window.addEventListener('load', () => {
    // change greeting based on time of day
    let greeting = new Date().getHours() > 11 ? 'Hi there!' : 'Good morning!';
        document.querySelector('#bio .title-1').innerText = greeting;
});