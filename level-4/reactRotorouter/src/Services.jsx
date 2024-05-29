import React from "react";
import {useNavigate,Link} from 'react-router-dom'
import servicesData from "../servicestData";




export default function Services(){

    const navigate = useNavigate()

    const services = servicesData.map (service =>(

        <h3 key={service._id}>

            <Link to = {`/services/${service._id}`}>{service.name}</Link> - {service.price}

        </h3>
    ))

    return(

    <div>
        <h1>Services</h1>
        {services}

        <button onClick={()=> navigate("/")}>Reurn to Home</button>

    </div>
    )
}
       
