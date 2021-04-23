import React, { useState } from "react";
import "./style.css";

export default function App() {
  let [inputValue, setInputValue] = useState("");
  let [fullName, setFullName] = useState("");
  let value = "";
  const inputEvent = event => {
    console.log(event.target.value);
    value = event.target.value;
    setInputValue(value);
  };
  const updateValue = () => {
    setFullName(inputValue);
  };
  return (
    <div>
      <h1>Hello {fullName}</h1>
      <input type="text" placeholder="Enter Your Name" onChange={inputEvent} />
      <button onClick={updateValue}>Clik Me</button>
    </div>
  );
}
