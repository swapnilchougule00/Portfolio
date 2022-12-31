import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div id='about'
      className="flex flex-col relative h-screen text-center md:pl-10 md:text-left md:flex-row
    max-w-7xl justify-evenly max-auto items-center xl:pl-60 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
      initial={{
        x:200,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}

        src='https://th.bing.com/th/id/OIP.JRgDFEBhwfuCqhbO-tRitAHaHa?pid=ImgDet&rs=1'
        
        alt="Image"
        className="w-40 h-40 rounded-full object-cover flex-shrink-0 mt-24 md:rounded-lg 
        md:mt-0 md:w-65 md:h- xl:w-[250px] xl:h-[350px] "
      />
      <motion.div 
      initial={{
        x:200,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      viewport={{once:true}}

      className="space-y-10 px-4 xl:px-28 ">
      <h3 className="text-2xl font-semibold md:px-10 ">Hers is is a <span className="text-yellow-300"> little</span> background</h3>
        <p className="text-sm font-sans xl:text-[15px] md:px-10 md:text-base">
         Hello, I am swapnil, i've always wondered how these websites work and how to
          make these awesome animations And i took mechanical Engineering (Don't ask why) But in the 
          last year of my graduation i got my intrest in programming. So firstly i learned HTML, CSS, JS, 
          React and loads of other things. Recently i have been learning and exploring React, Framer Moiton, Tailwind CSS.
          Some personal info about me is i live in sangli, Maharashtra. I like cricket.  
           and that's it. I have nothing else to say so i am just gonna [ Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Corrupti, illum. Labore, quas! Totam iste cumque tempora at atque
          doloremque dolore cum qui! Sint ducimus consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus nulla in explicabo eligendi? Vero magnam officia autem asperiores sed cupiditate. culpa voluptate, eos quibusdam reiciendi]
        </p>
      </motion.div>
    </div>
  );
}

export default About;
