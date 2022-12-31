import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 p-4 px-5 flex items-start
     justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:-0
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
       className="flex flex-row items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/swapnil-chougule-705a1a243/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/swapnilchougule00?tab=repositories"
          fgColor="grey"
          bgColor="transparent"
        />
        
        <SocialIcon
          url="https://www.instagram.com/swapnilchougule__/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon url="https://portfolio-swapnil-chougule.netlify.app/" label="portfolio" fgColor="grey"
          bgColor="transparent" />
      </motion.div>

      <motion.div
       initial={{
        x:500,
        opacity:0,
        scale:-0
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
       className="cursor-pointer flex flex-row items-center text-gray-400">
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
