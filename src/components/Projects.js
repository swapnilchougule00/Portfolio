import React from "react";
import { motion } from "framer-motion";

import Project from "./Project";

function Projects() {
  return (
    <motion.div  id='projects'
      className="h-screen relative flex flex-col text-center 
    overflow-hidden max-w-full justify-evenly px-10 mx-auto items-center "
    >
      <p className="absolute text-2xl top-24 text-gray-500 uppercase tracking-[20px]">
        Projects
      </p>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 ">
      <Project/>
        </div>
      
    </motion.div>
  );
}

export default Projects;
