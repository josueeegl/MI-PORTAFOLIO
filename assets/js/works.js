const overlay = document.getElementById('gridWork-overlay');
document.querySelectorAll('.gridWork .gridWork-title').forEach((element) => {

    element.addEventListener('click', () => {
        const ruta = element.querySelector('img').getAttribute('src');
        const description = element.querySelector('p').innerHTML;
        overlay.classList.add('activo');
        document.querySelector('#gridWork-overlay img').src = ruta;
        document.querySelector('#gridWork-overlay .gridWork-descripcion').innerHTML = description;
    })

});

document.getElementById('btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
});

overlay.addEventListener('click', (event) => {
    if(event.target.id === 'gridWork-overlay'){
        overlay.classList.remove('activo');
        document.querySelector('#gridWork-overlay img').style.transform = 'scale(1)';
    }
});

document.querySelector('#gridWork-overlay img').addEventListener('click', () => {
    var t = document.querySelector('#gridWork-overlay img');
    if (t.style.transform == 'scale(1.9)') {
        t.style.transform = 'scale(1)';
    } else {
        t.style.transform = 'scale(1.9)';
    }

});