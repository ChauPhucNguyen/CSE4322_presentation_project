import React, { useState, useEffect } from 'react';
import '../App.css';
import '../input.css'

// Functions Section: Where you call your back-end formulas from the front-end.
// They will go in the <ul> as a new list item 
// "<li> Function Name = {Function formula} = {call you useStateFunction} </li>"




function FunctionsSection() {

  const [currentTime, setCurrentTime] = useState(0);
  const [currentMedian, setMedian] = useState(0);
  

  useEffect(() => {
    fetch('/descriptivestats').then(res => res.json())
    .then(data => { setCurrentTime(data.time); });
  }, []);
  useEffect(() => {
    fetch('/median').then(res => res.json())
    .then(data => { setMedian(data.median); });
  }, []);
  return (

      <div className='functions-section'>
        <h2>Functions:</h2>
        <h3>Measures of Location:</h3>
        <ul>
            <li>Population Mean = </li>
            <li>Median = {currentMedian}</li>
            <li>Mode = </li>
        </ul>
        <h3>Measures of Variability</h3>
        <ul>
            <li>Population Variance = </li>
            <li>Standard deviation =  </li>
            <li>Coefficient of Variation</li>
        </ul>
      </div>
  );
}

export default FunctionsSection;