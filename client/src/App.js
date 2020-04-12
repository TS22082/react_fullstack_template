import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Hello");
  }, []);
  return (
    <div className="App">
      <h1>A node express react starter template</h1>
    </div>
  );
}

export default App;
