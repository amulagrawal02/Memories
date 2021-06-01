const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRout");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server start at port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);
