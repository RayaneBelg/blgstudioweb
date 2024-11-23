import React, { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion';

export default function Loader() {
    const [loading , setLoading] = useState(true) ;
    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
    } , []);


  return (
       <div>
      {/* Conditionally render the loader */}
      {loading ? (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center"
         
          
          
        >
            <motion.div className='overflow-hidden'>
            <motion.h1
            className="text-white text-8xl font-bold uppercase font-mono"
            initial={{ y: 150 }}
            animate={{ y : 0 }}
            exit={{y:150}}
            transition={{ duration: 1.5 , repeat: 0 ,  repeatType : "reverse"}}
          >
            [BLG studio ©]
          </motion.h1>

            </motion.div>
         
        </motion.div>
      ) : null}
    </div>
  )
}
