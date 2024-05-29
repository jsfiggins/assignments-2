import React from "react";
import {useNavigate} from 'react-router-dom';


export default function Home (){

    const navigate = useNavigate();

    return (
        <div>

           <h1>The plumbers</h1>

            <p> Call us for all of your plumbing concerns! No job too big or too small! </p>

           <button onClick ={()=> navigate("/About")}> Learn About Us!</button>
           <button onClick ={()=> navigate("/Services")}> Our Services </button>

        </div>
    )
}