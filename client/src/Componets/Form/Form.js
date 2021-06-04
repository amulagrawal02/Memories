import React, { useState, useEffect } from "react";
import "./Form.css";
function Form() {
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: "",
    selectedFile: "",
  });

  return (
    <div>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={(e) => setData({ title: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="creator"
          value={data.creator}
          onChange={(e) => setData({ creator: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="message"
          value={data.message}
          onChange={(e) => setData({ message: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="tag"
          value={data.tag}
          onChange={(e) => setData({ tag: e.target.value })}
        ></input>
        <input
          type="file"
          placeholder="creator"
          value={data.selectedFile}
          onChange={(e) => setData({ selectedFile: e.target.value })}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
