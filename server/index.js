const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRout");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.use("/posts", postRoutes);
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
