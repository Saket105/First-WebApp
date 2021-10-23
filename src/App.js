import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');  //Whether dark mode is enable or not
  

  const removedBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  }

    const enableDark = (cls)=>{
      removedBodyClasses();
      document.body.classList.add('bg-'+cls);
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
     {/* <Router> */}
        <Navbar title="Hello Saket" about="About Us" mode={mode} enableDark={enableDark}/> 
        {/* <Navbar/> */}
        <div className="container my-5">
            {/* <Switch>
                  <Route exact path="/about">
                        <About />
                    </Route>
                  <Route exact path="/">
                        <TextForm heading="Enter the text to analyze below" mode = {mode}/>
                    </Route>
                </Switch> */}
                <TextForm heading="Enter the text to analyze below" mode = {mode}/>
          </div>
      {/* </Router> */}
  </>
  );
}

export default App;
