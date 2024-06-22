import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>

                <li> <Link to="/" className="nav-link">Home</Link> </li>
                <li>  <Link to="/add" className="nav-link"> New Entry</Link> </li>
                <li> <Link to="/log" className="nav-link">View Past Workouts </Link> </li>

            </ul>
        </nav>
    )
}