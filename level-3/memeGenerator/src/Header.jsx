import React from "react";


export default function Header (){
    return(
        <div>
            <header className="header">
                <img className="sponge" src='./src/assets/logoimages/memeLogo.jpg'/>

                <h1 className ="title">Meme Generator</h1>
                <h4 className="headerComponent">React Project Lvl 3</h4>

            </header>
        </div>
    )
}