import React from "react";

export default function BlogPost(props){
    return(
        <div>
            <h1 className= "blogTitle">{props.title}</h1>
            <h2 className="subTitle">{props.subTitle}</h2>
            <p>Posted by <span className="author">{props.author} </span> on <span className="date">{props.date}</span></p>
            <div className="lineDec"></div> 
        </div>
    )
}
