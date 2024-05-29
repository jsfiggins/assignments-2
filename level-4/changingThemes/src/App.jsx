import React,{useState} from 'react';
import Navbar from './assets/Navbar';
import Footer from './assets/Footer';
import './App.css';
import MainBody from './assets/MainBody';
import ThemeContext from './assets/ThemeContext';
import Button from './assets/Button';




function App() {

const [color,setColor]= useState("dark")

const toggleTheme =()=>{
  setColor(prevColor=>prevColor === "dark" ? "light" : "dark")
}

  return (

    <>
      <ThemeContext.Provider value ={{
        color:color,
        toggleTheme: toggleTheme
      }
    }>
    
        <Navbar />
        <MainBody />
        <Button />
        <Footer />
        </ThemeContext.Provider>
     
    </>
  )
}

export default App;
