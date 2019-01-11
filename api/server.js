const express = require("express");
const configMdlware = require("./config/middleware");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to Node-Express API");
});

module.exports = server;
