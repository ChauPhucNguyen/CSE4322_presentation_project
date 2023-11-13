import React, { useState } from 'react';
import './App.css';
import './input.css';
import Header from './Components/Header.js';
import DescriptiveStatsPage from './DescriptiveStatsPage.js';
import Footer from './Components/Footer'

function App() {
  const [numbersArray, setNumbersArray] = useState([]);

  return (
    <div className="App">
      {/* <Header/> */}
      <DescriptiveStatsPage numbersArray={numbersArray} setNumbersArray={setNumbersArray}/>
      <Footer /> 
    </div>
  );
}

export default App;
