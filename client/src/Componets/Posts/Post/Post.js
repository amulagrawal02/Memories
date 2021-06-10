import React from "react";

function Post(value) {
  return (
    <div>
      {console.log("Inside post.js", value)}
      <h1>Post</h1>
      <p>{value.value._id}</p>
    </div>
  );
}

export default Post;
