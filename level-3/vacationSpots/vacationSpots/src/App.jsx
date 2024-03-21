import React from "react";
import Card from "./Card";
import data from "./data";
import "./index.css";


function App() {
  
  const cards = data.map( (vacationSpot) =>{
    return(
      
      <Card 
        key={vacationSpot.id} 
        place={vacationSpot.place}
        season={vacationSpot.timeToGo}
        img={vacationSpot.img}
        price={vacationSpot.price}
        />
       

    )
  })
  return (
    <div className = "container">

      <h1 className="title">VACATION GETAWAYS</h1>

      {cards}

    </div>
  )

}

export default App
