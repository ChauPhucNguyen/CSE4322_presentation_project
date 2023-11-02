import React, { useState } from 'react';

function DataInput({ setNumbersArray }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertToNumberArray = () => {
    const stringArray = inputValue.split(',');
    const numberArray = stringArray.map((str) => parseFloat(str.trim()));
    setNumbersArray(numberArray);
  };

  return (
    <div className='data-input-wrapper'>
      <input
        className='text-box'
        type="text"
        placeholder="Enter numbers separated by commas"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={convertToNumberArray}>Convert to Array</button>
    </div>
  );
}

export default DataInput;
