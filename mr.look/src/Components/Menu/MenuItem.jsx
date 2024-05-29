import React from 'react'
import {motion} from 'framer-motion'

const item ={
  initial:{y:-100},
  animate:{y:0}

}

export default function MenuItem(props) {
  return (
    <motion.div
    variants={item}

    
    className='text-[17px] hover:text-[#FDAF17] duration-75 hover:text-[20px] font-medium pt-10 pb-10 pl-[100px]'>
      {props.children}
    </motion.div>
  )
}
