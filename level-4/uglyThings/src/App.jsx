import React from 'react';
import './App.css';
import UglyForm from './assets/UglyForm';
import UglyList from './assets/UglyList';
import { useContext } from 'react';
import { UglyContext } from './assets/UglyContext';

function App() {

  const context = useContext(UglyContext)
  console.log(context)

  return (
    <>
     
        <UglyForm />
        <UglyList />


    </>
  )
}

export default App
