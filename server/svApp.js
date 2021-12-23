const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productRoute = require("./routes/svProdutos");
const loginRoute = require("./routes/svLogin");
const registerRoute = require("./routes/svRegister");

app.use("/produtos", productRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Content-Type, Origin, X-Requested-With, Accept, Authorization");

    if(req.method === "OPTIONS"){

        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
        return res.status(200).response({});
    }

    next();
})

module.exports = app;