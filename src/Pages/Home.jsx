import React from 'react'
import Loader from '../Components/Loader'
import Services from '../Components/Services'
import Work from '../Components/Work'
import { motion } from 'framer-motion'

export default function Home() {


const presta = ["SITES VITRINES" , "E-COMMERCE" , "MARKETING DIGITAL"]


  return (
    <div className='  flex flex-col justify-center  bg-[#EFEFEF] font-bold uppercase font-mono shadow-md shadow-black pt-[10vh]'>
     
      <div className='flex  justify-center items-center py-6'>
      <h1 className='lg:text-8xl text-[#071952]'>[BLG Studio ©]</h1>

      

      </div>
      <div className='flex  justify-center items-center py-6 text-[#071952] '>
      {presta.map((letter , i)=>(
        <motion.p className='mx-2 text-4xl'
        initial={{opacity:0 , y : -20 }}
        animate={{opacity:1 , y : 0 }}
        exit={{opacity:0 , y : -20 }}
        transition={{delay : i*.05}}
        
        >{letter}</motion.p>

      ))}
  </div>
      <Services/>

       
      <Work/>
    </div>
  )
}
