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
        res.status(500).json({ errorMessage: "Error retrieving the posts" });
      });
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  posts
    .findById(id)
    .then((post) => {
      if (!post) {
        res.status(404).json({ errorMessage: "Post not found" });
      } else {
        res.status(200).json(post);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: "Error retrieving the post" });
    });
});

// Adding a new post
router.post("/", (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).json({
      errorMessage: "Post needs a title or content",
    });
  } else {
    posts
      .insert(req.body)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "Error adding post" });
      });
  }
});

// Updating Post
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const title = req.body.title;
  const contents = req.body.contents;

  if (!title || !contents) {
    return res.status(400).json({
      errorMessage: "Post needs a title or content",
    });
  } else {
    posts
      .update(id, req.body)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "Error updating post" });
      });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    posts
      .remove(id)
      .then(() => {
        res.status(201).json({ message: `post was removed` });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "Error removing post" });
      });
  } else {
  }
});

// Requests to /api/posts/:id/comments

// Gets all comments
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

// Gets a comment
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

// Post a comment
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
