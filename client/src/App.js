import React, { useState } from "react";
import memories from "./images/memories.png";
import "./AppStyle.css";
import Form from "./Componets/Form/Form";
import Posts from "./Componets/Posts/Posts";

const statusContext = React.createContext(1);

function App() {
  const [status, setStatus] = useState(1);
  return (
    <div className="main-container">
      <div className="AppBar">
        <h2>Memories</h2>
        <img className="mem-logo" src={memories} alt="Memories"></img>
      </div>
      <statusContext.Provider
        value={{ status: status, updateStatus: setStatus }}
      >
        <div className="container">
          <div>
            <Posts />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </statusContext.Provider>
    </div>
  );
}

export default App;
export { statusContext };
