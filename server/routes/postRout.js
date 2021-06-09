const express = require("express");
const router = express.Router();
const postCont = require("../controller/postCont.js");

// router.get("/", postCont.getPosts);
router.post("/createPosts", postCont.createPost);
router.get("/getPosts", postCont.getPost);

module.exports = router;
