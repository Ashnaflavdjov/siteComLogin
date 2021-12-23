const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        resposta: "Rota = produtos"
    });
});

router.post("/", (req, res, next) => {
    res.status(201).send({
        resposta: "informação recebida"
    });
});

module.exports = router;