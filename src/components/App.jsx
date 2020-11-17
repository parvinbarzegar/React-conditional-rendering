import React from "react";
import Login from "./Login";

var isloogedIn = true;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // isloogedIn ? <h1>Hello</h1> : <Login />
        // currentTime <12 ? null: <h1>Why are you still working!!!</h1>
        currentTime > 12 && <h1>Why are you still working!!!</h1>
      }
    </div>
  );
}

export default App;
