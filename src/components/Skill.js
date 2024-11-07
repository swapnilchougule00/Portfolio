import React from "react";
import { motion } from "framer-motion";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import next from "../assets/next.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind-icon.png";
import express from "../assets/express-icon.png";
import mongodb from "../assets/mongodb-icon.png";
import redux from "../assets/redux-icon.png";
import shadcn from "../assets/shadcn-icon.png";
import zustand from "../assets/zustand-icon.png";

function Skill() {
  return (
    <div className="flex justify-center xl:mt-20">
      <div className="grid md:grid-cols-4 grid-cols-3 gap-6 ">
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img "
          src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
          alt=""
        />
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src="https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png"
          alt=""
        />
        <motion.img
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={javascript}
          alt=""
        />
        <motion.img
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={typescript}
          alt=""
        />
        <motion.img
          initial={{
            x: -150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={react}
          alt=""
        />
        <motion.img
          initial={{
            x: -150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={tailwind}
          alt=""
        />
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={next}
          alt=""
        />
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img "
          src={redux}
          alt=""
        />{" "}
        <motion.img
          initial={{
            x: -150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={express}
          alt=""
        />
        <motion.img
          initial={{
            x: -150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={mongodb}
          alt=""
        />
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img"
          src={zustand}
          alt=""
        />
        <motion.img
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="img "
          src={shadcn}
          alt=""
        />
      </div>
    </div>
  );
}

export default Skill;
