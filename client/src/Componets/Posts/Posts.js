import React, { useState, useEffect, useContext } from "react";
import Post from "./Post/Post";
import axios from "axios";
import { statusContext } from "../../App";

const url = "http://localhost:5000/getPosts";
function Posts() {
  const [data, setData] = useState([]);
  const { status, updateStatus } = useContext(statusContext);
  useEffect(async () => {
    const newData = await axios.get(url);
    setData(newData);
    console.log(newData);
    console.log(status);
    updateStatus(true);
  }, [status]);
  return (
    <div>
      <h1>Posts</h1>
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
