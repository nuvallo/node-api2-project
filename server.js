const express = require("express");
const cors = require("cors");
const postsRouter = require("./posts/post-router");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.json({ msg: "welcome to my server" });
});

const localHost = "21.0.0.1";
const port = 5000;
server.listen(port, () => {
  console.log(`Server Running on http://${localHost}:${port}`);
});
