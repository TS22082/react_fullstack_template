import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get("/example").then((result) => {
      console.log(result.data.message);
    });
  }, []);

  return (
    <div className="App">
      <h1>A node express react starter template</h1>
    </div>
  );
}

export default App;
