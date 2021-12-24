const path = require("path");

const devserver = () => ({
  allowedHosts: "auto",
  host: "localhost",
  port: 2593,
});

module.exports = devserver;
