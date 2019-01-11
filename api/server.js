const express = require("express");
const configMdlware = require("./config/middleware");

const projectsRoute = require("./projects/projectsRoute");
const errorHandler = require("./common/errorHandler");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to Node-Express API");
});

server.use("/projects", projectsRoute);
server.use(errorHandler);

module.exports = server;
