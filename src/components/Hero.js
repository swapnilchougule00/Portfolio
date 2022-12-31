import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import img1 from "./images/img1.jpeg";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, My name is Swapnil Chougule", "I am a React Developer"],
    loop: true,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackGroundCircles />
      <motion.img
      initial={{
        rotate:270
      }}
        animate={{
          rotate:360
        }}
        transition={{
          duration: 1
        }}
        className="reletive rounded-full h-32 w-31 mx-auto object-cover "
        src={img1}
        alt=""
      />
      <div className="z-20">
        <h3 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Developer
        </h3>
        <h1 className="text-4xl px-1 lg:text-6xl font-semibold md:px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-3">

         
            <Link smooth to="#about" className="heroButton">About</Link>
       
  
          
            <Link smooth to="#skills" className="heroButton">skills</Link>
         

         
            <Link smooth to="#projects" className="heroButton">Projects</Link>
         

         
            <Link smooth to="#contact" className="heroButton">Contact</Link>
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
