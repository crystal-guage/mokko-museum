
window.onload = function () {
    // const faceEl = document.getElementById('face');

    // faceEl.addEventListener('click', function () {
    //     faceEl.classList.toggle('thema1');
    //     faceEl.classList.toggle('thema3');
    // });
}

setInterval(function () {

    const faceEl = document.getElementById('face');
    if (faceEl.classList.contains('thema1')) {
        faceEl.classList.toggle('thema1');
        faceEl.classList.toggle('thema2');
    } else if (faceEl.classList.contains('thema2')) {
        faceEl.classList.toggle('thema2');
        faceEl.classList.toggle('thema3');
    } else if (faceEl.classList.contains('thema3')) {
        faceEl.classList.toggle('thema3');
        faceEl.classList.toggle('thema1');
    }
}, 7000);