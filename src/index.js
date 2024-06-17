const express = require("express");
const apiruta = require("./controller/routes/ruta");
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta para la raíz del sitio web
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

// Rutas de la API
app.use("/api", apiruta);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
