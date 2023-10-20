import React from 'react';

function DisplayArray({ array }) {
  return (
    <div>
        <h2>Resulting Array:</h2> <p>{array.join(', ')}</p>
    </div>
  );
}

export default DisplayArray;
