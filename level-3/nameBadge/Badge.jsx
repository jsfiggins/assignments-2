import React from "react";

export default function Badge (props){


    return(
        <div className="badges">
            <h1>Badge</h1>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Place of birth: {props.birthplace}</p>
            <p>Email: {props.email} </p>
            <p>Phone: {props.phone} </p>
            <p>Favorite Food: {props.faveFood} </p>
            <div className ="box"> Interesting fact about yourself: {props.textarea}</div>
    
         </div>
    )

}