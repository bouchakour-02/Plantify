// routes/community.js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Mock community posts data (replace this with database in production)
let posts = [];

// Get all community posts
router.get('/posts', (req, res) => {
  res.json(posts);
});

// Create a new post
router.post(
  '/posts',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author: 'Anonymous', // Add user handling for logged-in users
    };
    posts.push(newPost);
    res.json(newPost);
  }
);

module.exports = router;
