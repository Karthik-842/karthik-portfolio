import React from 'react'
import {tech} from '../assets/assets';
import { toolsData} from '../assets/assets';
import Image from 'next/image';


const Skills = () => {
    

  
  return (
    <>
    
    {/* Skills */}
   <div className='flex items-center justify-center w-full mt-10'> 
        <div className='flex flex-col items-center justify-center'>
            <h1 className='p-5 text-3xl'><span className='font-bold hero-text'>Skills and Tools</span>🚀</h1>
            <div className="py-4 bg-white border border-gray-500 rounded-md w-150 h-60 whitespace-nowrap">
                <div className='flex m-5 overflow-hidden cursor-pointer'>
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
                <div className='flex m-5 overflow-hidden cursor-pointer'>
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
                <div className='flex m-5 overflow-hidden cursor-pointer'>
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
    </div>
    
    {/*Tools */}
    <div className='flex flex-col items-center justify-center'>
        <h4 className='my-6 font-semibold text-gray-700 font-ovo'>Gears I Code With</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) => (
                <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg shadow-md cursor-pointer sm:w-14 aspect-square hover:-translate-y-1 shadow-gray-300' key={index}>
                    <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                </li>
                            ))}
            </ul>
    </div>
    </>
  )
}

export default Skills