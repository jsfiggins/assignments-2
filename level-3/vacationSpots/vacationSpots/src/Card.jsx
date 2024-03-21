import React from "react";

export default function Card(props) {

  
  let badgeText;
  let timeToGoClass = "";

  // At the beginning of your Card component
console.log("props.price:", props.price);
console.log("props.timeToGo:", props.timeToGo);
console.log("timeToGoClass:", timeToGoClass);

// ... rest of the component


  // Determine badge text based on price
  if (props.price <= 500) {
    badgeText = "$";
  } else if (props.price <= 1000) {
    badgeText = "$$";
  } else if (props.price > 1000) {
    badgeText = "$$$";
  }

  // Determine timeToGoClass based on timeToGo
  if (props.timeToGo === "Spring") {
    timeToGoClass = "spring";
  } else if (props.timeToGo === "Summer") {
    timeToGoClass = "summer";
  } else if (props.timeToGo === "Fall") {
    timeToGoClass = "fall";
  } else if (props.timeToGo === "Winter") {
    timeToGoClass = "winter";
  }

  return (
   
    <div className={`card ${timeToGoClass}`}>
   
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <h1>Escape to {props.place}</h1>
      <h2> Best time to go: {props.season} </h2>
      <img
        src={`/vacationPics/${props.img}`}
        alt={`A picture of ${props.place}`}
        className="cardImage"
      />
    </div>
  );
}

