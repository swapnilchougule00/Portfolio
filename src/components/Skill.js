import React from 'react'
import { motion } from 'framer-motion'

function Skill() {
  return (
    <div className='flex justify-center xl:mt-20'>
    <div className='grid grid-cols-3 gap-6 '>
      <motion.img 
      initial={{
        x:150,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className='img ' src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" alt="" />
      <motion.img
       initial={{
        x:150,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
       className='img' src="https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png" alt="" />
      <motion.img 
       initial={{
        x:50,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className='img' src="https://d33wubrfki0l68.cloudfront.net/e6aa8c0f7aba633986925b29f6be450f2e6e1fad/542ba/assets/images/javascript.png" alt="" />
      <motion.img 
      initial={{
        x:-50,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className='img xl:h-28' src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <motion.img 
      initial={{
        x:-150,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className='img h-24 xl:h-28 ' src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png" alt="" />
      <motion.img 
      initial={{
        x:-150,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className='img' src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-1024.png" alt="" />
      <motion.img
      initial={{
        x:150,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
       className='img' src="https://www.pine64.org/wp-content/uploads/2019/04/github-logo.jpg" alt="" />
    </div>
    </div>
  )
}

export default Skill
