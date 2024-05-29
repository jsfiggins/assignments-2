import React from "react";
import {useNavigate} from "react-router-dom";

export default function About(){



    const navigate = useNavigate();



     return (
        <div>
            <h1>About</h1>
            <h2> Founded in 1997</h2>

            <button onClick = {() => navigate ('/')}>Visit Home Page</button>
            <button onClick = {() => navigate ('/Services')}>Service Page</button>
        </div>
     )
}