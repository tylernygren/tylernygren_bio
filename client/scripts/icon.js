window.onload = () => {

    const array = [];
    document.querySelectorAll('.icon').forEach(icon => {
        array.push(icon.innerText);
    });

    fetch('/icons', { method: "post", body: array})
        .then( async res => {
            document.write(await res.json());
        })
        .catch( err => {
            console.log(err);
        })
}