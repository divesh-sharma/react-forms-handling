import React, { useState } from "react";

const ComplexForm = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });
  const onSubmits = event => {
    event.preventDefault();
    console.log(fullName);
    alert("Form Submitted");
  };

  const inputValue = event => {
    let { value, name } = event.target;
    // let name = event.target.name;
    console.log(value, name);
    // return;
    setFullName(prevValue => ({ ...prevValue, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <h5>{fullName.email}</h5>
        <h6>{fullName.phone}</h6>
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          onChange={inputValue}
          value={fullName.fName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          onChange={inputValue}
          value={fullName.lName}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={inputValue}
          value={fullName.email}
        />
        <input
          type="text"
          placeholder="Mobile No."
          name="phone"
          onChange={inputValue}
          value={fullName.phone}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexForm;
