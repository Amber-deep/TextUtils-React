import './App.css';
import React, {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
 
function App() {
  const[mode, setMode] = useState('light');  
  const [alert,setAlert] = useState(null);
  
  const showAlert =(message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042745';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

    {/* <Router> */}
    <Navbar title = "TestUtils" aboutText = "About Us" mode= {mode} toggleMode = {toggleMode} />
          <Alert alert ={alert} />
          <div className='container my-3'>
        {/* <Routes> */}

        {/* <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter anything you want" mode = {mode}/>}/> */}
        <TextForm heading="Enter anything you want" mode = {mode}/>

        {/* </Routes> */}
        </div>
     {/* </Router> */}
    </>
  ); 
}

export default App;