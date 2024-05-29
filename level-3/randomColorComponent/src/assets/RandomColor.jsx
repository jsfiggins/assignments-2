import React from "react";
import axios from "axios";


export default function RandomColor(){

    const [randomColor,setRandomColor]=React.useState("");


     React.useEffect(()=>{

        axios
        .get(`https://random-flat-colors.vercel.app/api/random?count=5`)
        .then((response)=>{
            console.log(response.data);
            const fetchedColor = response.data.colors[0];
            setRandomColor(fetchedColor);
        })

        .catch((error)=>{
            console.error("ERRPRRRPRR PR RPR",error);
            setRandomColor("red");
        })

     },[])

   
    const box={
        width: '200px',
        height:"200px",
        backgroundColor:randomColor,
        border:  '5px solid black',
        margin: 'auto'
    }

    
    
    return (
        <div>
            
                <div className="color">
                    <div style={box}>
                        <h1>Random Color Component</h1>
                    </div>
                </div>
        </div>
    )
    
} 