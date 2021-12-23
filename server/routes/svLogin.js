const express = require("express");
const router = express.Router();
const db = require("../src/myModules/dataBase");

router.get("/", (req, res, next) => {

    res.json({users: db.getData()});
});

router.post("/", async (req, res, next) => {

    if(await db.getData({email: req.body.email, senha: req.body.senha}) == true){

        res.json("Successful login");
    } else {
        res.json("Access denied");
    }
});

module.exports = router;