const express = require("express");
const posts = require("../data/db.js");
const router = express.Router();

// Request to /api/posts

// Get all posts
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

// Get post
router.get("/:id", (req, res) => {
  posts
    .findById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        // this isn't displaying (come back and debug)
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving the posts" });
    });
});

// Adding a new post
router.post("/", (req, res) => {
  const title = req.body.title;
  const contents = req.body.contents;

  if (!title || !contents) {
    return res.status(400).json({
      mesage: "Post needs a title or content",
    });
  } else {
    posts
      .insert(req.body)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Error adding post" });
      });
  }
});

// Updating Post
router.put("/:id", (req, res) => {
  const title = req.body.title;
  const contents = req.body.contents;

  if (!title || !contents) {
    return res.status(400).json({
      mesage: "Post needs a title or content",
    });
  } else {
    posts
      .update(req.params.id, req.body)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Error updating post" });
      });
  }
});

router.delete("/:id", (req, res) => {
  if (req.params.id) {
    posts
      .remove(req.params.id)
      .then(() => {
        res.status(201).json({ message: "Post deleted" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Error removing post" });
      });
  } else {
  }
});

module.exports = router;
