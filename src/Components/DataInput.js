import React, { useState } from 'react';
import DisplayArray from './DisplayArray';

function DataInput() {
  const [inputValue, setInputValue] = useState('');
  const [numbersArray, setNumbersArray] = useState([]);

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
      <div>
        <DisplayArray array={numbersArray}/>
      </div>
    </div>
  );
}

export default DataInput;
