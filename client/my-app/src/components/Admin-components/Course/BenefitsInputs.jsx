"use client";
import React, { useState } from "react";
const DynamicInputs = () => {
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);

  // Function to add a new input
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  // Function to handle input value change
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  // Function to remove an input field
  const handleRemoveInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, e)}
          />
          <button onClick={() => handleRemoveInput(input.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
};

export default DynamicInputs;
