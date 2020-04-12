const express = require("express");
const posts = require("../data/db.js");
const router = express.Router();

//GET request to /api/posts
router.get("/", (req, res) => {
  posts.find().then((posts) => {
    res
      .status(200)
      .json(posts)
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Error retrieving the posts" });
      });
  });
});

module.exports = router;
