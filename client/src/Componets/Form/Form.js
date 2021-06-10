import React, { useState, useContext } from "react";
import "./Form.css";
import FileBase from "react-file-base64";
import axios from "axios";
import { statusContext } from "../../App";
const url = "http://localhost:5000/";
function Form() {
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const { status, updateStatus } = useContext(statusContext);

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log("Yes");
    await axios
      .post(url + "createPosts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Y");
    var r1 = Math.floor(Math.random() * 100 + 1);
    var r2 = Math.floor(Math.random() * 9 + 1);
    updateStatus(r1 * r2);
    setData({
      creator: "",
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="creator"
          value={data.creator}
          onChange={(e) => setData({ ...data, creator: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="message"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="tags"
          value={data.tags}
          onChange={(e) => setData({ ...data, tags: e.target.value })}
        ></input>

        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
