const express = require("express");
const router = express.Router();

// Sample blog posts data
const postsEn = require("../data/en.json");
const postsTh = require("../data/th.json");

// API endpoint to get blog posts in the requested language
router.get("/:lang/blog", (req, res) => {
  const lang = req.params.lang.toLowerCase();

  let posts;
  if (lang === "en") {
    posts = postsEn;
  } else if (lang === "th") {
    posts = postsTh;
  } else {
    return res.status(400).json({ message: "Invalid language" });
  }

  res.json(posts);
});

// API endpoint to get a specific blog post by slug and language
router.get("/:lang/blog/:slug", (req, res) => {
  const { lang, slug } = req.params.lang.toLowerCase();

  let posts;
  if (lang === "en") {
    posts = postsEn;
  } else if (lang === "th") {
    posts = postsTh;
  } else {
    return res.status(400).json({ message: "Invalid language" });
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return res.status(404).json({ message: "Blog post not found" });
  }

  res.json(post);
});

module.exports = router;
