const express = require("express");
const router = express.Router();
const postCont = require("../controller/postCont.js");

// router.get("/", postCont.getPosts);
router.post("/", postCont.createPost);

module.exports = router;
