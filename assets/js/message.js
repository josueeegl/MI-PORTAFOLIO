//Requerimos el paquete
var nodemailer = require('nodemailer');
const mailermailgun = require('nodemailer-mailgun-transport');

module.exports = {
    enviar_correo: async (req, res) => {
        const auth = {
            auth: {
                api_key: '9d46ebf412db76b3aea3a2707da2dc33-054ba6b6-a0362a44',
                domain: 'sandboxd449b7446c774ffba378e3ca3c085dd8.mailgun.org'
            }
        };

        let transporter = nodemailer.createTransport(mailermailgun(auth));

        const mailOptions = {
            from: 'manriquegarcia92@gmail.com',
            to: 'josuelei1299@gmail.com',
            subject: 'Portafolio',
            text: req.query.mensaje,
        }

        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                res.send(JSON.stringify(err));
                console.log(err);

            } else {
                res.status(201).send(JSON.stringify('Mensaje enviado'));
                console.log('enviado');
            }
        })
    }
}