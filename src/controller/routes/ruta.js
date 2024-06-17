const express = require("express");
const { verificar, recibir } = require("../apicontroller");

const router = express.Router();

// Definir las rutas y asignarles los controladores
router.get("/verificar", verificar);
router.post("/recibir", recibir);

module.exports = router;
