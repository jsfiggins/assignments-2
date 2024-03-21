import React from "react";
import Navbar from "./Navbar";

export default function Header(){
    return (
     <div className="header">
            <Navbar />
         <div className="headerContent">
            <div>
                <h1 className="titleh1"> Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    </div>
    )
}