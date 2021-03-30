import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Books from "./Component/Books";

function App() {
  const [bookValue, setBookValue] = useState([
    {
      id: 1,
      name: "samsung",
      phone: "0172133",
    },
    {
      id: 2,
      name: "Motorola",
      phone: "01815600",
    },
  ]);
  return (
    <div className="App">
      <Books myBooks={bookValue} />
    </div>
  );
}

export default App;
