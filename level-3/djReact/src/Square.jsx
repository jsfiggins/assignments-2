import React from "react";

export default function Square(props){

    const style={
        width: '200px',
        height:"200px",
        backgroundColor: props.backgroundColor,
        border:  '5px solid black',
        margin: '10px'

    }

    return (
<div style={style}>

</div>
    )
    }