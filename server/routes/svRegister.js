require('dotenv').config();
const express = require("express");
const router = express.Router();
const emailApi = require("../svModules/validateEmail");
const db = require("../svModules/dataBase");

router.post("/", async (req, res, next) => {

    if(await emailApi(req.body.email) == true){

        db.insertData(req.body);
        res.json("Account created");
    };
});

router.get("/", (req, res, next) => {
    res.json({
        gg: true
    })
});

module.exports = router;