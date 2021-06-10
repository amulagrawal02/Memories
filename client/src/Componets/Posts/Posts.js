import React, { useState, useEffect, useContext } from "react";
import Post from "./Post/Post";
import axios from "axios";
import { statusContext } from "../../App";

const url = "http://localhost:5000/getPosts";
function Posts() {
  const [data, setData] = useState([]);

  const { status, updateStatus } = useContext(statusContext);
  useEffect(() => {
    async function fetchData() {
      const newData = await axios.get(url);
      setData(newData);
      console.log(newData);
      console.log(status);
    }
    fetchData();
  }, [status]);
  return (
    <>
      <h1>Posts</h1>
      {Object.keys(data).length
        ? data.data.map((post) => {
            return <Post key={post._id} value={post} />;
          })
        : "Loading"}
    </>
  );
}

export default Posts;
