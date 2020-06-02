const express = require("express");
const cors = require("cors");
const postsRouter = require("../posts/post-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/posts/", postsRouter);

server.get("/", (req, res) => {
  res.json({ msg: "welcome to my API" });
});

module.exports = server;
