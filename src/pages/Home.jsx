// src/pages/Home.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ColorBends from '../components/ColorBends.jsx';
import '../styles/landing.css'; 

const Home = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
  const opacityDesc = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    // FORCE FULL HEIGHT AND WIDTH, REMOVE PADDING
    <main className="w-screen h-screen bg-[#050505] overflow-hidden m-0 p-0 relative">
      
      {/* SECTION 1: INTRODUCTION */}
      <section id="introduction" ref={containerRef} className="relative w-full h-full m-0 p-0">
          
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
              <ColorBends 
                  colors={["#FF0000","#ebeb4dff", "#32e432ff", "#0000FF"]}
                  rotation={0}        
                  speed={0.2}         
                  scale={1}           
                  frequency={1}       
                  warpStrength={1}    
                  mouseInfluence={1}  
                  parallax={0.5}        
                  noise={0.1}           
                  transparent={true} 
              />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center mix-blend-difference px-4">
              
              <motion.h1 
                  style={{ x: xLeft }}
                  className="text-[12vw] leading-none font-[Anton] text-white whitespace-nowrap select-none"
              >
                  ARNAV
              </motion.h1>

              <motion.h1 
                  style={{ x: xRight }}
                  className="text-[12vw] leading-none font-[Anton] text-white whitespace-nowrap mb-8 select-none"
              >
                  MURDANDE
              </motion.h1>

              <motion.div 
                  style={{ opacity: opacityDesc }}
                  className="text-center max-w-2xl"
              >
                  <p className="font-[Poppins] text-lg md:text-xl text-gray-200 font-light tracking-wide leading-relaxed">
                      SOFTWARE ENGINEER & DATA SCIENCE ASPIRANT
                  </p>
                  <div className="w-24 h-1 bg-white mx-auto my-6 rounded-full"></div>
                  <p className="font-mono text-sm md:text-base text-gray-300">
                      B.Tech Computer Engineering student building scalable applications 
                      and deriving actionable insights from data. 
                  </p>
              </motion.div>
          </div>
      </section>
      
      {/* REST OF SECTIONS REMOVED AS REQUESTED */}

    </main>
  );
};

export default Home;