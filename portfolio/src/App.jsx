import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Recruiter from './pages/recruiter'
import Stalker from './pages/stalker'

import Intro from './components/Intro'
import Dashboard from './components/Dashboard'



function App() {


 const [showIntro, setShowIntro] = useState(null);

 useEffect(() => {
  const hasseenintro = localStorage.getItem('hasseenintro')
 
 if(hasseenintro == 'ture') {
  setShowIntro(false);

 } else {
  setShowIntro(true);

  localStorage.setItem('hasseenintro','true');
 }
}, []);

if (showIntro == 'null'){
  return null;
}

   return (
    <div>

      <Routes> 
        <Route path = "/" element= {
              showIntro ? (
            <Intro onDone={() => setShowIntro(false)} />
          ) : ( <Dashboard />
          )} 
          
        />


        <Route path = "recruiter" element= {<Recruiter />} />

        <Route path = "stalker" element= {<Stalker />} />

      </Routes>
      

         
    </div>
  );
}

  


export default App;
