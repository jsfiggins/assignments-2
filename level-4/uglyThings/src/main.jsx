import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import './index.css'
import  {UglyContextProvider}  from './assets/UglyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <UglyContextProvider> 
   
     <App />

    </UglyContextProvider>

  </React.StrictMode>
)
