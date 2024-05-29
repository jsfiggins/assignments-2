import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";


export default function Footer(props) {

    const context = useContext(ThemeContext);
 
   
    return (
        <div>

        <div className={`${context.color}Theme footer`}>
                <p>This is the Footer </p>
            </div>
        </div>
    )
}