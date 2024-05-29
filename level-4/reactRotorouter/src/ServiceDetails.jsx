import React from "react";
import {useParams} from "react-router-dom";
import servicesData from "../servicestData";


export default function ServiceDetails (){

    const {serviceId} = useParams()
    const foundService = servicesData.find(service => service._id === serviceId) 

    //console.log(useParams)
    console.log(foundService)
    console.log(serviceId)



    return (
        <>

       <div>
         <h1> Detail Page </h1>
         <h3>{foundService.name}-${foundService.price}</h3>
         <p>{foundService.description}</p>
       </div>
        
        
        
        
        </>
    )
}