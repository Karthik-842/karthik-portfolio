import React from 'react'
import Image from 'next/image';
import {assets} from '../assets/assets'; // Adjust the path as necessary 

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-5'>
        <div className='mt-7'>
            <Image src= {assets.profile_img} alt='' className='rounded-full w-32 h-32'/>
        </div>
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">Hi! I'm 
        <span className="font-extrabold hero-text"> Karthik T </span> </h3> 
        <h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-bold mb-2 font-outfit'>
            Full Stack Developer with a passion for building web applications.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>I specialize in creating dynamic and responsive web applications using the latest technologies.</p>

        <div className='flex flex-col sm:flex-row items-center gap-4 '>
            <a href='#contact' className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 mt-4 bg-white text-black hover:bg-lightHover dark:hover:bg-darkHover hover:text-black dark:hover:text-blue-600 transition duration-300 font-ovo'
            >Contact Me <Image src={assets.right_arrow} className='w-4' alt="Contact" /></a>
            <a href='/sample-resume.pdf' download
            className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 mt-4 bg-white text-black hover:bg-lightHover dark:hover:bg-darkHover hover:text-black dark:hover:text-blue-600 transition duration-300 font-ovo'
            >My Resume <Image src={assets.download_icon} className='w-4' alt="Download" /></a>

        </div>
    </div>
  )
}

export default Header