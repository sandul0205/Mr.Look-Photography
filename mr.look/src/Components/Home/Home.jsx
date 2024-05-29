import React from 'react'
import HeroImg from "../../Images/Hero.jpg"
import { motion} from "framer-motion";

import Card from '../Card/Card';
import NavBar from '../NavBar/NavBar';
import ProjectsUser from '../Projects/User/ProjectsUser';


export default function Home() {
  return (
    <div>


    <NavBar/>
      <motion.img
        initial={{
          opacity:0,
        }}
        animate={{
          opacity:1 ,
        }}
        transition={{
          duration:0.5,
          
        }}

      
        src={HeroImg} alt="HeroImg" className=" h-screen relative z-0" ></motion.img>

            
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-10">

        

       

        <div className="absolute top-[200px] flex flex-col text-white items-left  z-20 h-full width-[80%] mx-auto  pl-20 ">
            <motion.h1
            
            initial={{x:-1000}}
            animate={{x:0}}
            transition={{
              delay:0.3,
              duration:1 }}
            className='text-5xl font-bold max-w-[500px] tracking-wide leading-20 '>Unforgettable moments captured with artistry.</motion.h1>
            <motion.h2
                    initial={{x:-1000}}
                    animate={{x:0}}
                    transition={{
                      delay:0.4,
                      duration:1 }}
            
            className='text-3xl font-bold pt-10'>Book Now For Your Event</motion.h2>
            <motion.p
                    initial={{x:-1000}}
                    animate={{x:0}}
                    transition={{
                      delay:0.4,
                      duration:1 }}

            className='text-1xl text-[#FDAF17] font-semibold pt-3'>Mr.Look Photography</motion.p>
            
            
            <div className="flex pt-3">
            <motion.button
                    initial={{x:-1000}}
                    animate={{x:0}}
                    transition={{
                      delay:0.7,
                      duration:1 }}

            type="button" class="text-gray-900 bg-white border border-gray-300  hover:bg-gray-400 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 min-w-[100px] ">Projects</motion.button>
            <motion.button
                    initial={{x:-1000}}
                    animate={{x:0}}
                    transition={{
                      delay:0.5,
                      duration:1 }}

            type="button" class="focus:outline-none text-white bg-[#FDAF17] hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 min-w-[100px]">Book Now</motion.button>

            </div>

            
            


        </div>

        



      </div>

      <Card />


      <ProjectsUser />
      

    </div>


    
    
    
    
    )

}
