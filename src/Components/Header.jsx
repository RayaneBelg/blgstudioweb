import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { motion, useScroll, useTransform , AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const { scrollY } = useScroll();

  // Use Framer Motion's useTransform hook to dynamically map scroll values to height and border thickness
  const headerHeight = useTransform(scrollY, [0, 100], ['7vh', '5vh']);
  const headerBorder = useTransform(scrollY, [0, 100], ['0px', '2px solid black']);
  const headerFont = useTransform(scrollY, [0, 100], ['1.5rem', '1.2rem']);

  // Animation variants for the container and its children
  const containerV = {
    visible: {scaleY:1 ,transition: { duration: 1, when : "beforeChildren" , staggerChildren: 0.3 } },
    hidden: {scaleY : 0},
  };

  
const itemV = {
  visible : { opacity : 1 ,
     y: 0 , transition: { duration: .5}} ,
  hidden : { opacity : 0 , y:60}
}
 

  

  return (
    <motion.div className='sticky top-0  z-40 bg-[#efefef]'>
      {/* Header Section */}
      <motion.div 
        style={{ height: headerHeight, borderBottom: headerBorder , fontSize : headerFont}}
        className={ ` ${open ? "border-b-2 border-[#071952]" : ""} flex justify-between items-center p-4 mb-[-7vh] z-50`}
       
      >
        {/* Logo Section */}
        <Link to={"/"}>
        <motion.h1 style={{fontSize : headerFont}} className='text-xl font-bold font-mono text-[#071952]'>[BLG Studio ©]</motion.h1>

        </Link>

        {/* Toggle Icon for Menu */}
        {!open ? (
          <motion.div
          exit={{opacity : 0}}
          transition={{duration : 1}}
          className='bg-[#071952] p-1 rounded-sm'> <RxHamburgerMenu size={25}  color='white'  onClick={toggleMenu} /> </motion.div>
          
        ) : (
          <motion.div className='bg-black p-1 rounded-sm'> <FaTimes size={25}  color='white'  onClick={toggleMenu} /> </motion.div>
        )}
      </motion.div>

      {/* Dropdown Menu Section */}
      {open && (
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerV}
          className='  bg-[#efefef] top-0 flex flex-col h-screen border-b-2 border-black origin-top justify-center items-center gap-20 overflow-hidden z-100 absolute w-full'
        >
           <motion.div className='bg-black p-1 rounded-sm' variants={itemV}> <FaTimes size={25}  color='white'  onClick={toggleMenu} /> </motion.div>
          <motion.div className='overflow-hidden'>
            <Link to={'/work'}>
            
          <motion.h1 variants={itemV} className='text-4xl lg:text-7xl font-bold' onClick={toggleMenu}>WORK</motion.h1>

          </Link>
          </motion.div>

          <motion.div className='overflow-hidden'>
          <Link to={'/bg'}>
          <motion.h1 variants={itemV} className='text-4xl lg:text-7xl font-bold'>CONTACT</motion.h1>
          </Link>
          </motion.div>
          

         
        </motion.div>
      )}
    </motion.div>
  );
}

{/*  <motion.div>
            <motion.div
              variants={itemVariant}
              className='lg:text-8xl text-4xl font-bold gap text-center py-4 transition-all duration-1000 ease-in-out hover:bg-black hover:text-white'
              
            >
              WORK
            </motion.div>
            <motion.div
              variants={itemVariant}
              className='lg:text-8xl text-4xl font-bold gap text-center py-4 transition-all duration-1000 ease-in-out hover:bg-black hover:text-white'
            >
              ABOUT
            </motion.div>
           
          </motion.div>*/}