const express = require('express');
const cors = require("cors");
const path = require('path');
const puerto = process.env.PORT || 3000;
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const {
    enviar_correo
} = require('./assets/js/message');

let path_inicial = path.join(__dirname, 'assets');
let app = express();


app.use(express.static(path_inicial));


app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.sendFile(path.join(path_inicial,'index_EN.html'));
});
app.post('/correo', function (req, res) {
    enviar_correo(req, res);
});
app.listen(puerto, () => {
    console.log('Levantado, escuchando el puerto ' + puerto);
});