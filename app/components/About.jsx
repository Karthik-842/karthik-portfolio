import React from 'react'
import Image from 'next/image';
import {assets} from '../assets/assets';
import {infoList, toolsData} from '../assets/assets'; // Adjust the path as necessary


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='mb-2 text-lg text-center font-ovo'>Introduction</h4>
        <h2 className='mb-4 text-5xl text-center font-ovo'>About Me</h2>  

        <div className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
            <div className='rounded-3xl sm:w-80 max-w-none animate-float'>
                <Image src={assets.avatar_11} alt='user' className='w-full h-full shadow-2xl rounded-3xl ' />
            </div>
            <div className='flex-1'>
                <p className='max-w-2xl mb-10 font-ovo'>Hello! I'm Karthik T, a Full Stack Developer with a passion for creating dynamic and responsive web applications. I specialize in both front-end and back-end development, ensuring that every project I work on is not only functional but also visually appealing.</p>
                <ul className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'>
                    {infoList.map(({icon, iconDark,title,description},index) => (
                        <li className='border-[0.5px] border-gray-400 p-4 rounded-xl cursor-pointer hover:bg-rose-50 hover:-translate-y-1 duration-500 shadow-stone-300 hover:shadow-xl transition-shadow' key={index}>
                            <Image src={icon} alt={title} className='w-6 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-sm text-gray-600'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg shadow-md cursor-pointer sm:w-14 aspect-square hover:-translate-y-1 shadow-gray-300' key={index}>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        
        
    </div>
  )
}

export default About