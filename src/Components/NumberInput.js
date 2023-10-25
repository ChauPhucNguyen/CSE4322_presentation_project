// NumberInput.js

import React, { useEffect, useState } from "react";

function NumberInput({ onArrayChange }) {
  const [inputValue, setInputValue] = useState("");
  const [numbersArray, setNumbersArray] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertToNumberArray = () => {
    const stringArray = inputValue.split(",");
    const numberArray = stringArray.map((str) => parseFloat(str.trim()));
    setNumbersArray(numberArray);

    // Pass the array to the parent component
    onArrayChange(numberArray);
  };

  // ... (rest of the component)

  return (
    <div className="data-input-wrapper">
      <input
        className="text-box"
        type="text"
        placeholder="Enter numbers separated by commas"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={convertToNumberArray}>Convert to Array</button>
      <div>
        <p>Resulting Array: {numbersArray.join(", ")}</p>
      </div>
    </div>
  );
}

export default NumberInput;
