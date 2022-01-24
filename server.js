const express = require('express');
const path = require('path');
const {
    enviar_correo
} = require('./assets/js/message');
let initial_path = path.join(__dirname, 'assets');

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'index_EN.html'))
});
app.post('/correo', enviar_correo);

app.use((req, res) => {
    res.json("404");
})


app.listen(3000, () => {
    console.log('Levantado, escuchando el puerto 3000');
});