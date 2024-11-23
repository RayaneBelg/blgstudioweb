import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.div className='relative h-[150vh] z-0'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
        <motion.div className='fixed bottom-0 w-full'>
        <motion.div className='h-[50vh] flex items-center justify-center border-t-2 border-black z-1'>
        <motion.h1 className='text-4xl font bold font-mono'>
    [Blg studio ©]
        </motion.h1>
      
    </motion.div>
            
        </motion.div>

        
      

    </motion.div>
    
  )
}
