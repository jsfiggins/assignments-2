import React, { useState, useEffect } from "react";

export default function AddBountyForm(props) {
  const initialInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    type: props.type || "",
    living: props.living || false,
    bountyAmount: props.bountyAmount || ""
  };
  const [inputs, setInputs] = useState(initialInputs);

  useEffect(() => {
    setInputs(initialInputs);
  }, [props]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    if (props.closeForm) {
      props.closeForm();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={inputs.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={inputs.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <label>
        Living:
        <input
          type="checkbox"
          name="living"
          checked={inputs.living}
          onChange={handleChange}
        />
      </label>
      <input
        type="number"
        name="bountyAmount"
        value={inputs.bountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount"
      />
      <button type="submit">{props.btnText}</button>
    </form>
  );
}
