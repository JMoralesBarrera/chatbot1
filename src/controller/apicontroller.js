const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

// Controlador para verificar
const verificar = (req, res) => {
    console.log("Llamado al controlador verificar");
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
    console.log(`mode: ${mode}, token: ${token}, challenge: ${challenge}`);

    if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
        res.status(403).send('Unauthorized');
    }
}

// Controlador para recibir
const recibir = (req, res) => {
    console.log("Llamado al controlador recibir");
    res.send("Recibido");
}

module.exports = { verificar, recibir };
