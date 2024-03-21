import React from "react";

export default function Navbar(){
    return(
        <nav>
            <ul className= "navBar">
                <h3 className= "brand">Start Bootstrap</h3>
                <a href="#home"><li className="right">HOME</li></a>
                <a href="#about"><li className="right">ABOUT</li></a>
                <a href="#samplePost"><li className="right">SAMPLE POST</li></a>
                <a href="#contact"><li className="lastLi" >CONTACT</li></a>
            </ul>
        </nav>
    )
}