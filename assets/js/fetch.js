document.getElementById('btnSubmit').addEventListener('click', () => {
    var nombre = document.getElementById('name').value,
        email = document.getElementById('email').value,
        Subject = document.getElementById('Subject').value,
        message = document.getElementById('message').value;
    if (nombre != '' && email != '' && Subject != '' && message != '') {
        var mensaje = `Nombre: ${nombre}\n Correo: ${email} \n Asunto: ${Subject} \n Mensaje: ${message}`;
        fetch('/correo?' + new URLSearchParams({
            mensaje: mensaje,
        }), {
            method: 'POST',
        }).then(res => res.json()).then(data => {
            console.log(data);
            location.reload();
        });
    }
});