import React, { useState } from "react";
import Square from './Square';
import useSound from  'use-sound';
import thwip  from  './assets/thwip.mp3';

export default function ColorBoard() {
    const [colors, setColors] = useState(["white", 'white', "white", "white"]); 

    function smallTimeClick() {
        
        const yingYang = colors.map(color => (colors[0] === "white") ? "black" : "white");

        // Update the state with the new colors
        setColors(yingYang);
    }

    function partyDj(){
        setColors(prevColors =>["purple","purple",...prevColors.slice(2)]);
    }

    function professionalDjLeft(){
        setColors((prevColors) => [...prevColors.slice(0, 2), 'blue',prevColors[3]]);
    }
    function professionalDjRight(){
        setColors((prevColors)=> [...prevColors.slice(0,3),"blue"]);
    }
    function InvisibleDj(){
        setColors((prevColors)=> [prevColors[0] === "transparent"? "white" : "transparent" , ...prevColors.slice(1)])
    }
    
    function bigtimeDj2(){
        setColors((prevColors)=>[prevColors.slice(0,2),"yellow",...prevColors.slice(2)])
    }
    
    function bigtimeDJ3(){
        setColors((prevColors)=>[...prevColors.slice(0,2),"red", ...prevColors.slice(3)])
    }
    function bigtimeDj4(){
        setColors((prevColors)=>[...prevColors.slice(0,3),"orange"])
    }
    const [playThwip] = useSound(thwip);


    return (
        <div className="gridContainer">

            {colors.map((color, index) => (
                <Square key={index} backgroundColor={color} />
            ))}

            <button className="djButtons"  onClick={smallTimeClick}>Push ME Small Time</button>
            <button className="djButtons" onClick={partyDj}>Party Dj Whoop Whoop </button>
            <button className="djButtons" onClick={professionalDjLeft}>Professional Dj</button>
            <button className="djButtons" onClick={professionalDjRight}>Professional Dj</button>
            <button className="djButtons" onClick={InvisibleDj}>Square 1 Button </button>
            <button className="djButtons" onClick={bigtimeDj2}>Square 2 Button </button>
            <button className="djButtons" onClick={bigtimeDJ3}>Square 3 Button </button>
            <button className="djButtons" onClick ={bigtimeDj4}>Square 4 Button </button>
            <button className="djButtons sound"  onClick ={playThwip}>Play Sound Button</button>

        </div>
    );
}
