const express = require("express");

const hostName = "21.0.0.1";
const PORT = 9000;

const server = express();

server.get("/", (req, res) => {
  res.json({ msg: "Welcome to your API" });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${hostName}:${PORT}`);
});
