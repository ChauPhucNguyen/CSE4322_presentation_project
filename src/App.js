import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
    <div className="App">
      <header className="App-header bg-red-300">

        ... no changes in this part ...

        <p>the median is {currentMedian}</p>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;