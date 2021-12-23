require('dotenv').config();
const express = require("express");
const router = express.Router();
const emailApi = require("../../src/myModules/validateEmail");

router.post("/", async (req, res, next) => {

    emailApi(req.body);
});

router.get("/", (req, res, next) => {
    res.json({
        gg: true
    })
});

module.exports = router;