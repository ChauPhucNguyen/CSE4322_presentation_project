import React, { useState, useEffect } from 'react';
import './App.css';
import './input.css';
import './DescriptiveStatsPage.js'
import Header from './Components/Header.js';
import DescriptiveStatsPage from './DescriptiveStatsPage.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <DescriptiveStatsPage/>
    </div>
  );
}

export default App;