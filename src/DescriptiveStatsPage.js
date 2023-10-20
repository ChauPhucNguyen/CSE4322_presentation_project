import React, { useState, useEffect } from 'react';
import './App.css';
import './input.css'
import PageBio from './Components/PageBio.js';
import bioData from './Components/bios';
import DataInput from './Components/DataInput';
import NumberInput from './Components/NumberInput';
import DisplayArray from './Components/DisplayArray';
import FunctionsSection from './Components/FunctionsSection';

function DescriptiveStatsPage() {
  const [displayedArray, setDisplayedArray] = useState([]);

  // const [currentTime, setCurrentTime] = useState(0);
  // const [currentMedian, setMedian] = useState(0);
  
  const handleArrayChange = (array) => {
    setDisplayedArray(array);
  };

  // useEffect(() => {
  //   fetch('/descriptivestats').then(res => res.json())
  //   .then(data => { setCurrentTime(data.time); });
  // }, []);
  // useEffect(() => {
  //   fetch('/median').then(res => res.json())
  //   .then(data => { setMedian(data.median); });
  // }, []);
  return (
    <div className="Descriptive-Stats-Wrapper">
      <PageBio bios={bioData[0]}/>
      <div className='descriptive-user-container'>
        <section className='left-section'>
          <h2>Input User data separated using comma:</h2>
          <p>Example Input: 1,50,30,10,45</p>
          {/* <NumberInput onArrayChange={handleArrayChange}/> */}
          <DataInput></DataInput>
          
        </section>
        <section className='right-section'>
          <h2>Graphs from user input:</h2>
          <p>This is the content for the right section.</p>
        </section>
      </div>
      <div className='functions-wrapper'>
        <FunctionsSection/>
      </div>
    </div>
  );
}

export default DescriptiveStatsPage;