import React from "react";
import memories from "./images/memories.png";
import "./AppStyle.css";
import Form from "./Componets/Form/Form";
import Posts from "./Componets/Posts/Posts";
function App() {
  return (
    <div className="main-container">
      <div className="AppBar">
        <h2>Memories</h2>
        <img className="mem-logo" src={memories} alt="Memories"></img>
      </div>
      <div className="container">
        <div>
          <Posts />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
