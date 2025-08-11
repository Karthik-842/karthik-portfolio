import React from 'react'
import {tech} from '../assets/assets';


const Skills = () => {
    

  
  return (
    <>
    <div className='flex flex-col items-center '>
    <h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-bold mb-2 font-outfit max-w-3xl text-center'>
            Full Stack Developer with a passion for building web applications.</h1>
    <p className='max-w-2xl mx-auto font-ovo'>I specialize in creating dynamic and responsive web applications using the latest technologies.</p>
    </div>
    
    
    {/* Skills */}
   <div className='flex items-center justify-center w-full'> 
        <div className="py-4 bg-white border border-gray-500 rounded-md w-150 h-60 whitespace-nowrap">
            <div className='flex m-5 overflow-hidden'>
                <div className="flex animate-marquee">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
                <div className="flex animate-marquee aria-hidden=true">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
            </div>
            <div className='flex m-5 overflow-hidden'>
                <div className="flex animate-marquee-reverse">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
                <div className="flex animate-marquee-reverse aria-hidden=true">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
            </div>
            <div className='flex m-5 overflow-hidden'>
                <div className="flex animate-marquee">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
                <div className="flex animate-marquee aria-hidden=true">
                {[...tech,...tech].map((t, i) => (
                <span key={`first-${i}`} className="flex items-center px-4 py-1 mx-2 bg-black rounded-md">
                    {t.icon}
                    <span className="ml-2 font-semibold text-white ">{t.name}</span>
                </span>
                ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills