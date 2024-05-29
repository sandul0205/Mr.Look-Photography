import { motion} from 'framer-motion'
import React from 'react'
import Menu from '../Menu/Menu'

export default function NavBar() {
  return (
    <>
    
    <nav className=" absolute left-0 right-0 top-0 text-white mx-w-screen-xl flex items-center justify-between cursor-pointer">
        <motion.div
        initial={{ height:0}}
        animate={{height:"20vh"}}
        transition={{
            delay:0.3,
            duration:0.3,
        }}

        className='bg-black opacity-50 absolute top-0 left-0 right-0 h-[120px] z-20 '></motion.div>
        
        <motion.div
        initial={{y:-100}}
        animate={{y:0}}
        transition={{
            delay:0.5,
            
        }}
        
        
        className="text-3xl font-black mt-10 pl-20 pb-10 z-30 tracking-wide ">Mr.Look Photography</motion.div>

        
        <Menu />

       
    

    </nav>

    </>
  )
}
