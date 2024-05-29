import React from 'react'

import ProjectImg01 from '../User/UserImg01';
import ProjectImg02 from '../User/UserImg02';
import ProjectImg03 from '../User/UserImg03';
import ProjectImgMiddle from '../User/UserImgMiddle';
import ProjectImg04 from '../User/UserImg04';
import ProjectImg05 from '../User/UserImg05';
import ProjectImg06 from '../User/UserImg06';
import ProjectImg09 from '../User/UserImg09';
import ProjectImg07 from '../User/UserImg07';
import ProjectImg08 from '../User/UserImg08';
import ProjectImg10 from '../User/UserImg10';
import ProjectImg11 from '../User/UserImg11';
import NavBar from '../../NavBar/NavBar';



export default function ProjectsHome() {
  return (
    <>
  
    <NavBar/>
    <div className="relative ">
      
    
    <div className="relative flex h-screen w-full ">
    <ProjectImg01/>
    <ProjectImg02/>
    </div>

    <div className="relative">
      <ProjectImg03 />

      <ProjectImgMiddle />
    
      <ProjectImg04 />

      <ProjectImg05 />

      <ProjectImg06 />

      <ProjectImg09/>

      <ProjectImg07 />

      <ProjectImg08 />
    
      <ProjectImg10 />

      <ProjectImg11 />
    </div>




  </div>
  </>

  )
}
