import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Navbar(props) {

        const context = useContext(ThemeContext);
        console.log(context)

    return (
        <div className={`${context.color}Theme`}>

            <div className="navBar">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}