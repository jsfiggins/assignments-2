import React from "react";
import Pet from "./Pet";

export default function Friend(props) {
    return (
    <div className="container">
        <div className="homie">
            <h1>Friend: {props.friend.name}</h1>
            <h2> Age: {props.friend.age}</h2>
       </div>

           
     <div>
          <h3 className="homie">Pets:</h3>
             {props.friend.pets.map((pet) => (
             <Pet key={pet.name} name={pet.name} breed={pet.breed} />
             ))}
     </div>
            
    </div>
    );
}