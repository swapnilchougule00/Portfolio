import { motion } from 'framer-motion'
import React from 'react'
import news from './images/news.jpeg'
import weather from './images/weather.jpeg'
import linkedin from './images/linkedin.jpeg'
import travel from './images/travel.jpeg'



function Project() {

const projects = [
  {
    id:1,
    img:news,
    title:'news app',
    demo:'https://mynewsapp-sc.netlify.app',
    git:'https://github.com/swapnilchougule00/News_App'
  },

  {
    id:2,
    img:weather,
    title:'weather app',
    demo:'https://weather-app-swapnil-chougule.netlify.app/',
    git:'https://github.com/swapnilchougule00/Weather-App'
  },

  {
    id:3,
    img:linkedin,
    title:'linkedin clone',
    demo:'https://linkedin-clone-sc-2470d.web.app/',
    git:'https://github.com/swapnilchougule00/linkedin-clone'
  },

  {
    id:4,
    img:travel,
    title:'travle web',
    demo:'https://travel-website-sc.netlify.app/',
    git:'https://github.com/swapnilchougule00/Travel_website'
  }
]

  return (
    <div className='flex flex-row ' >

    {
      projects.map((value)=>{
        return (
              
        <div key={value.id} className="mt-10 mr-5 bg-[#202020] p-4 card flex flex-col rounded-lg items-center 
        w-[300px] md:w-[500px] xl:w-[600px] scpace-y-2 flex-shrink-0">
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
        className="px-5" src={value.img} alt="images" />
        <p className='flex px-0 md:px-2 uppercase mt-4 text-2xl'>{value.title}</p>
       
          
        <div className='flex mt-5 w-full justify-around'>
          <button className="heroButton border border-white/50">
          <a href={value.demo} target='main'>View Demo</a>
          </button>

          <button className="heroButton border border-white/50">
           <a href={value.git} target='main'>View Code</a>
        
          </button>
          
        </div>
     
      </div>
        )

      })
    }
     </div>
  )
}

export default Project