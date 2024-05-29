import React from 'react'
import {motion} from 'framer-motion'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'


const menu ={
    animate:{
        transition:{
            delayChildren:0.5,
            staggerChildren:0.1

        }
    }
}

export default function Menu() {
  return (
    <motion.div
    variants={menu}
    initial="initial"
    animate="animate"
    
    className=' flex justify-center items-center z-30  mr-20'>
    <Link to='/'><MenuItem>Home</MenuItem></Link>
    <Link to='/Projects/User/ProjectsHome'><MenuItem>Projects</MenuItem></Link>
    <Link to='/Contact/Contact'><MenuItem>Contact</MenuItem></Link>
    <Link to='/Services/Services'><MenuItem>Services</MenuItem></Link>
   
    
    
    </motion.div>

  )
}
