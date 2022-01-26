const grid = new Muuri('.gridWork', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('gridWork').classList.add('imagenes-cargadas');
});