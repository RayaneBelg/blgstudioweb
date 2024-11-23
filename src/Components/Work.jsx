import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDE } from '../assets/dataSlide';
import {AnimatedBackground, matrixRain} from 'animated-backgrounds'
import { MdArrowForwardIos , MdOutlineArrowBackIos } from "react-icons/md";

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const [touchStartY, setTouchStartY] = useState(0); // For touch gestures

  // Scroll event handler for changing slides
  const handleScroll = (event) => {
    if (!isAnimating) {
      if (event.deltaY > 0) {
        handleRight();
      } else {
        handleLeft();
      }
    }
  };

  // Right navigation function
  const handleRight = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Prevent further navigation until animation completes
      setCurrentIndex((prevIndex) =>
        prevIndex < SLIDE.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  // Left navigation function
  const handleLeft = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Prevent further navigation until animation completes
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : SLIDE.length - 1
      );
    }
  };

  // Touch handlers for swipe gestures on mobile
  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    if (!isAnimating) {
      if (touchStartY - touchEndY > 50) {
        handleRight(); // Swipe up
      } else if (touchStartY - touchEndY < -50) {
        handleLeft(); // Swipe down
      }
    }
  };

  const split = SLIDE[currentIndex].title.split(" ");

  return (
   
    <motion.div
      className='relative h-[90vh] overflow-hidden'
      onWheel={handleScroll} // Scroll event handler
      onTouchStart={handleTouchStart} // Start tracking touch
      onTouchEnd={handleTouchEnd} // End tracking and determine swipe
    >
      <h1 className='text-6xl text-center mt-[8%] font-serif text-[#071952]'>OUR WORK</h1>
      <AnimatePresence>
        
        <motion.div
          key={currentIndex}
          className='font-serif flex flex-col gap-2 justify-center items-center transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 p-4 w-full font-thin'
           // Enable navigation once animation completes
        >
          <motion.h1 className='lg:text-9xl sm:text-5xl text-4xl flex overflow-hidden gap-8 mb-3 py-3  flex-wrap justify-center uppercase italic tracking-widest text-[#071952]'>
            {split.map((char, i) => (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
                key={i}
              >
                {char}
              </motion.div>
            ))}
          </motion.h1>
          <motion.p className='font-bold uppercase font-mono text-[#071952]'>{SLIDE[currentIndex].desc}</motion.p>
          <motion.p className='font-bold uppercase font-mono text-[#071952]'>{SLIDE[currentIndex].desc}</motion.p>
          <motion.p className='font-bold uppercase font-mono text-[#071952]'>{SLIDE[currentIndex].desc}</motion.p>
          
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
      <motion.div className='text-4xl font-bold border-2 border-black rounded-full lg:h-[300px] lg:w-[300px] sm:h-[300px] sm:w-[300px] h-[150px] w-[150px] absolute bottom-[10%] left-[10%] flex justify-center items-center'>
        <motion.div className='flex gap-3'>
          <motion.button
         
          
          onClick={handleLeft} className='text-3xl font-extrabold'>
           <MdOutlineArrowBackIos/>
          </motion.button>


          <motion.p key={currentIndex} className='overflow-hidden text5xl'
          initial = {{opacity : 0 , y :50}} animate={{y:0  , opacity : 1}} transition={{duration : .8}}
          >{currentIndex + 1}</motion.p> /  <motion.p className='text-5xl'>{SLIDE.length}</motion.p> 


           
          <motion.button onClick={handleRight} className='text-3xl font-extrabold'>
            <MdArrowForwardIos/>
          </motion.button>
        </motion.div>
      </motion.div>
      </AnimatePresence>
      <motion.div className='overflow-hidden absolute right-[10%] bottom-[10%]'>
        <motion.div>
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              initial={{ y: 250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .8, delay: 0.2 }}
              className=' h-[10rem]  md:w-[300px] md:h-auto   object-cover  z-1'
              src={SLIDE[currentIndex].img}
              onAnimationComplete={() => setIsAnimating(false)} // Reset animation state for image transition as well
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
   
    
    
  );
}
