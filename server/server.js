const http = require("http");
const app = require("./svApp");

const port = 3001;
const server = http.createServer(app);

server.listen(port);