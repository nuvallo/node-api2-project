const express = require("express");
const Posts = require("../data/db.js");
const router = express.Router();

//GET request to /api/posts
router.get("/", (req, res) => {
  res.send("<h1>This worked</h1>");
});

module.exports = router;
