import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { GrGithub } from "react-icons/gr";






export default function Footer(){
    return(
        <div className="footer">
            <div className="iconContainer">
                <AiFillTwitterCircle className="icon" />
                <MdOutlineFacebook className="icon" />
                 <GrGithub className="gitIcon icon"/>
            </div>
            <div className="smallContainer">
             <small className="copyright">Copyright © Your Website 2023</small>
            </div>

        </div>
    )
};