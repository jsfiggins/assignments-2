import React, { useState } from 'react';

export default function DiceBox() {
  const [numbers, setNumbers] = useState([1,2,3,4,5]);

  function generateRandomNumbers (){
    setNumbers(prevNumbers => {
      const newNumbers = prevNumbers.map(() => Math.floor(Math.random() * 6) + 1);
      return newNumbers;
    });
  };

  return (
    <div>
      <div>
        <div className="container">        
        <h1>Dice Box</h1>
        {numbers.map((number, index) => (
          <span className= "DiceNumber" key={index}>{number} </span>
        ))}
      </div>
      <button onClick={generateRandomNumbers}>Roll Dice</button>
    </div>
    </div>
  );
}