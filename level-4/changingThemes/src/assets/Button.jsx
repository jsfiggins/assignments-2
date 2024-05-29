import React,{useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function Button (props){
    const context = useContext(ThemeContext)

    return (
        <button  onClick ={context.toggleTheme} className = {`${context.color}Theme`}>Switch Theme</button>
    )
}