const express = require("express");
const posts = require("../data/db.js");
const router = express.Router();

// Request to /api/posts

// Get all posts
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await posts.find());
  } catch (error) {
    res.status(500).json({ errorMessage: "Error retrieving the posts" });
    console.log("GET posts error: ", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await posts.findById(id);
    if (!post) {
      res.status(404).json({ errorMessage: "Post was not found" });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    console.log("GET post by ID was not found: ", error);
    res.status(500).json({ errorMessage: "Error retrieving the post" });
  }
});

// Adding a new post
router.post("/", async (req, res) => {
  try {
    const { title, contents } = req.body;
    if (!title || !contents) {
      return res
        .status(400)
        .json({ errorMessage: "Post needs a title or content" });
    } else {
      res.status(200).json(await posts.insert(req.body));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Error adding post" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, contents } = req.body;
    if (!title || !contents) {
      res.status(404).json({ errorMessage: "Post requires title and content" });
    } else {
      const newPost = await posts.update(id, req.body);
      res.status(200).json(newPost);
    }
  } catch (error) {
    console.log("PUT error ", error);
    res.status(400).json({ errorMessage: "Error editing this post" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      res.status(200).json(await posts.remove(id));
    } else {
      res.status(404).json({ errorMessage: "Could not delete post" });
    }
  } catch (error) {
    console.log("DELETE post error: ", error);
    res.status(500).json({ errorMessage: "Error removing post" });
  }
});

// Requests to /api/posts/:id/comments

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  posts
    .findPostComments(id)
    .then((comments) => {
      res.status(201).json(comments);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: "Error retrieving comments" });
    });
});

router.get("/:id/comments/:commentId", (req, res) => {
  if (!req.params.id) {
    res.status(404).json({ errorMessage: "Post doesn't exists" });
  } else if (!req.params.commentId) {
    res.status(404).json({ errorMessage: "Comment doesn't exists" });
  } else {
    posts
      .findCommentById(req.params.commentId)
      .then((comment) => {
        res.status(201).json(comment);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "Error retrieving comment" });
      });
  }
});

router.post("/:id/comments", (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const commentInfo = { ...req.body, post_id: id };

  if (!id) {
    res
      .status(404)
      .json({ message: "The post with the specified ID does not exist." });
  } else if (!text) {
    res
      .status(400)
      .json({ errorMessage: "Please provide text for the comment." });
  } else {
    posts
      .insertComment(commentInfo)
      .then((comment) => {
        res.status(201).json(comment);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: "Error adding comment to post",
        });
      });
  }
});

module.exports = router;
