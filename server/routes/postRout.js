const express = require("express");
const router = express.Router();
const postCont = require("../controller/postCont.js");

router.get("/", postCont.getPosts);

module.exports = router;
