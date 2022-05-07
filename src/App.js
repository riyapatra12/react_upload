
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


 import TextForm from './components/TextForm';

 

function App() {

  const [alert,setAlert] = useState(null);

 const showAlert = (message,type)=>{
   setAlert({
     msg:message,
     type: type
   })

 }
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark'); 
      document.body.style.backgroundColor ='#204a89' 
      document.body.style.color = "white"
      showAlert("Darkmode has been enabled ","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor ='white'
      document.body.style.color = "black" 
      showAlert("LightMode has been enabled ","success");
    }
  }
  
  
  return (
<>
{/* <Router> */}
 <Navbar title ="TextUtils" aboutText="About Us" mode={mode}  toggleMode={toggleMode}/>
 <Alert alert={alert}/>

<div className='container my-3'>
{/* <Routes> */}
        
          
          <TextForm heading="Enter the text to analyze" /> 
    {/* <Route exact path='/about' element={< About />}></Route>
    
          
         
        </Routes> */}
       


</div>
{/* </Router> */}

</>
  );
}

export default App;
