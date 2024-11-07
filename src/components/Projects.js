import React from "react";
import { motion } from "framer-motion";

import Project from "./Project";

function Projects() {
  return (
    <motion.div  id='projects'
      className="no-scrollbar h-screen relative flex flex-col text-center 
    overflow-hidden max-w-full justify-evenly px-10 mx-auto items-center "
    >
     
        <div className=" w-full flex space-x-5 overflow-x-scroll scrollbar-hide  ">
      <Project/>
        </div>
      
    </motion.div>
  );
}

export default Projects;
