//Requerimos el paquete
var nodemailer = require('nodemailer');

module.exports = {
    enviar_correo: async (req, res) => {
        //Creamos el objeto de transporte
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'progra1pruebas@gmail.com',
                pass: 'PROGRA852963741'
            }
        });

        var mailOptions = {
            from: 'progra1pruebas@gmail.com',
            to: 'josuelei1299@gmail.com',
            subject: 'Verificación',
            text: req.query.mensaje
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(201).send(JSON.stringify('Mensaje enviado'));
            } else {
                console.log('Email enviado: ' + info.response);
                res.status(201).send(JSON.stringify('Mensaje enviado'));
            }
        });
    }
}