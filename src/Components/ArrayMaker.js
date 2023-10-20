import React, { createContext, useContext, useState } from 'react';

const ArrayContext = createContext();

export function useArrayContext() {
  return useContext(ArrayContext);
}

function ArrayMaker({ children }) {
  const [array, setArray] = useState([]);

  const updateArray = (newArray) => {
    setArray(newArray);
  };

  return (
    // <ArrayContext.Provider value={{ array, updateArray }}>
    //   {children}
    // </ArrayContext.Provider>
    <div>hello</div>
  );
}
export default ArrayMaker
