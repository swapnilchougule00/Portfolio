import React from 'react'
import Skill from './Skill'

function Skills() {
  return (
    <div
   
    
     className='h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
      <div className='absolute text-2xl top-24 text-gray-500 uppercase tracking-[20px]'>
        skills
      </div>
        <div className='absolute flex flex-row top-36 uppercase tracking-widest text-gray-500 text-sm md:text-[17px]'>These are the technologies that I have worked on</div>

      <div
       className='px-10 mt-11 '>
        <Skill/>
       
      </div>
    </div>
  )
}

export default Skills
