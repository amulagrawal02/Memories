import React, { useState, useEffect } from "react";
import "./Form.css";
import FileBase from "react-file-base64";
import axios from "axios";
const url = "http://localhost:5000/posts";
function Form() {
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: "",
    selectedFile: "",
  });

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log("Yes");
    await axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Y");
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
          placeholder="tag"
          value={data.tag}
          onChange={(e) => setData({ ...data, tag: e.target.value })}
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
