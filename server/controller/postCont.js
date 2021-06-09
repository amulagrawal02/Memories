const PostMessage = require("../models/post");

module.exports.createPost = async (req, res) => {
  console.log(req.body);
  const { title, message, selectedFile, creator, tags } = req.body;

  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const Data = await PostMessage.find();
    res.status(201).json(Data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
