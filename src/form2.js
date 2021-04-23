import React, { useState } from "react";

const FormExample = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const inputOne = event => {
    setName(event.target.value);
  };

  const inputTwo = event => {
    setLastName(event.target.value);
  };

  const onSubmits = event => {
    event.preventDefault();
    console.log(event);
    let finalName = name + " " + lastname;
    setFullName(finalName);
  };
  return (
    <div>
      <form onSubmit={onSubmits}>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={inputOne}
          value={name}
        />
        <input
          type="text"
          placeholder="Second Name"
          onChange={inputTwo}
          value={lastname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
