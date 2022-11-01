import React, { useState } from "react";
import "./App.css";

function App() {
  const [addTags, setAddTagas] = useState([]);

  const createTags = (e) => {
    //setAddTagas([...addTags, e.target.value])
    if (e.key === "Enter") {
      setAddTagas([...addTags, e.target.value]);
      // to remove a create tags on click enter
      e.target.value = "";
    }
  };
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
