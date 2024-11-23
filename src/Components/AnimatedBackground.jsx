import React, { useState } from "react";
import AnimatedBg from "react-animated-bg";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is imported

const AnimatedBackground = () => {
  // Define an array of background URLs or gradients
  const backgrounds = [
    "linear-gradient(to right, ##ffff, ##ffff)",
    "linear-gradient(to right, ##ffff, ##ffff",
    "linear-gradient(to right, #ffff, #ffff)", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the active background

  // Cycle through backgrounds when clicking the button
  const changeBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* Animated Background Component */}
      <AnimatedBg
        colors={black}
        duration={5} // Duration of the animation (in seconds)
        className="h-full w-full flex items-center justify-center z-0"
        index={currentIndex} // Current background index
      >
        {/* Content inside the animated background */}
        <div className="relative z-10 text-center p-8 rounded-lg bg-white bg-opacity-50 shadow-lg ">
          <h1 className="text-5xl font-bold text-gray-800">
            React Animated Background
          </h1>
          <button
            onClick={changeBackground}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 "
          >
            Change Background
          </button>
        </div>
      </AnimatedBg>
    </div>
  );
};

export default AnimatedBackground;
