import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


import "./App.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import ProjectsUser from './Components/Projects/User/ProjectsUser';
import ProjectsHome from './Components/Projects/User/ProjectsHome';




export default function App() {
  return (
    
    
    <>
    
      <div>
        
        <BrowserRouter>
        
        
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/Projects/Projects' element={<Projects />}></Route>
        <Route path='/Projects/User/ProjectsUser' element={<ProjectsUser />}></Route>
        <Route path='/Projects/User/ProjectsHome' element={<ProjectsHome/>}></Route>
        <Route path='/Contact/Contact' element={<Contact />}></Route>
        <Route path='/Services/Services' element={<Services />}></Route>
        <Route path='/AdminLogin/AdminLogin' element={<AdminLogin />}></Route>
        </Routes>
        </BrowserRouter>
    

        
       
      </div>
      
 
    </>

  )
}
