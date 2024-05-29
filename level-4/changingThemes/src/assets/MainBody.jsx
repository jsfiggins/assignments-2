import React,{useContext} from "react";
import ThemeContext from "./ThemeContext";



export default function MainBody(props) {

    
    
    const context = useContext(ThemeContext);
   



    return (
        <div className={`${context.color}Theme`}>
            <div className="main">

                <h1>This is the Main section </h1>              
            </div>

        </div>
    )
}