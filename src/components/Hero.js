import React from "react";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import img1 from "./images/img1.jpeg";
import { motion } from "framer-motion";

function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, My name is Swapnil Chougule", "<GuyWhoLovesToCdoe/>"],
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
        opacity:0.5
      }}
        animate={{
          scale:[1,2,1]
        }}
        transition={{
          duration: 1.3,
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
          <Link to='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link >
            <button className="heroButton">skills</button>
          </Link>
          <Link>
            <button className="heroButton">Projects</button>
          </Link>
          <Link>
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
