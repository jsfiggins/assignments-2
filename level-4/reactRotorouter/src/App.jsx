import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Home";
import About from "./About";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails";


function App() {


  return (
    <>
      <Router>

        <nav style={{ margin: 10 }}>

          <Link to="/" style={{ padding: 10 }}>Home</Link>
          <Link to="/about" style={{ padding: 10 }}>About</Link>
          <Link to="/services" style={{ padding: 10 }}>Services</Link>

        </nav>



        <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path = '/services/:serviceId' element ={ <ServiceDetails />} />


        </Routes>



      </Router>

    </>
  )
}

export default App
