import React from "react";

export default function Pet(props){
    return(
        <div className ="companions">
           <h1 className="petName">Name: {props.name}</h1> 
           <h2 className="petType">Breed: </h2><p className="petType">{props.breed}</p>
        </div>
    )
}