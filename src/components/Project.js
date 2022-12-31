import { motion } from 'framer-motion'
import React from 'react'
import news from './images/news.jpeg'
import weather from './images/weather.jpeg'
import linkedin from './images/linkedin.jpeg'
import travel from './images/travel.jpeg'



function Project() {
  return (
    <div className='flex flex-row '>
        <div className="mt-20  bg-[#202020] p-4 card flex flex-col rounded-lg items-center 
        w-[400px] md:w-[500px] xl:w-[600px] scpace-y-2 flex-shrink-0">
        <motion.img 
        initial={{
            y:-80,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{duration:1.5}}
        className="px-5" src={news} alt="imges" />
        <p className='flex px-0 md:px-2 uppercase mt-4 text-2xl'>News App</p>
       
          
        <div className='flex mt-5 w-full justify-around'>
          <button className="heroButton border border-white/50">
          <a href="https://mynewsapp-sc.netlify.app" target='main'>View Demo</a>
          </button>

          <button className="heroButton border border-white/50">
           <a href="https://github.com/swapnilchougule00/News_App" target='main'>View Code</a>
        
          </button>
          
        </div>
     
      </div>


        <div className="mt-20 ml-4   bg-[#202020] p-4 card flex flex-col rounded-lg items-center 
        w-[400px] md:w-[500px] xl:w-[600px] scpace-y-2 flex-shrink-0">
        <motion.img 
        initial={{
            y:-80,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{duration:1.5}}
        className="px-5" src={weather} alt="imges" />
        <p className='flex px-0 md:px-2 uppercase mt-4 text-2xl'>Weather App</p>
       
          
        <div className='flex mt-5 w-full justify-around'>
          <button className="heroButton border border-white/50">
          <a href="https://weather-app-swapnil-chougule.netlify.app/" target='main'>View Demo</a>
          </button>

          <button className="heroButton border border-white/50">
           <a href="https://github.com/swapnilchougule00/Weather-App" target='main'>View Code</a>
        
          </button>
          
        </div>
     
      </div>


        <div className="mt-20 card flex flex-col ml-4 bg-[#202020] p-4 rounded-lg items-center 
        w-[400px] md:w-[500px] xl:w-[600px] scpace-y-2 flex-shrink-0">
        <motion.img 
        initial={{
            y:-80,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{duration:1.5}}
        className="px-5 " src={linkedin} alt="imges" />
        <p className='flex px-0 md:px-2 uppercase mt-4 text-2xl'>linkdin clone</p>
       
          
        <div className='flex mt-5 w-full justify-around'>
          <button className="heroButton border border-white/50">
          <a href="https://linkedin-clone-sc-2470d.web.app/" target='main'>View Demo</a>
          </button>

          <button className="heroButton border border-white/50">
           <a href="https://github.com/swapnilchougule00/linkedin-clone" target='main'>View Code</a>
        
          </button>
          
        </div>
     
      </div>


        <div className="mt-20 card flex ml-4  bg-[#202020] flex-col p-4 rounded-lg items-center 
        w-[400px] md:w-[500px] xl:w-[600px] scpace-y-2 flex-shrink-0">
        <motion.img 
        initial={{
            y:-80,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{duration:1.5}}
        className="px-5" src={travel} alt="imges" />
        <p className='flex px-0 md:px-2 uppercase mt-4 text-2xl'>Travel App</p>
       
          
        <div className='flex mt-5 w-full justify-around'>
          <button className="heroButton border border-white/50">
          <a href="https://travel-website-sc.netlify.app/" target='main'>View Demo</a>
          </button>

          <button className="heroButton border border-white/50">
           <a href="https://github.com/swapnilchougule00/Travel_website" target='main'>View Code</a>
        
          </button>
          
        </div>
     
      </div>
     </div>
  )
}

export default Project