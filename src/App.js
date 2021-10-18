import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');  //Whether dark mode is enable or not
  
    const enableDark = ()=>{
      if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#454545';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
  return (
    <>
    <Navbar title="Hello Saket" about="About Us" mode={mode} enableDark={enableDark}/> 
    {/* <Navbar/> */}
    <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode = {mode}/>
        {/* <About/> */}
    </div>
  </>
  );
}

export default App;
