import React from 'react'
import Image from 'next/image';
import logo1 from '../assets/logo1.png'; // Adjust the path as necessary
import { useRef,useEffect } from 'react';
import Link from 'next/link';
import {assets} from '../assets/assets'; // Adjust the path as necessary

const Navbar= () => {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = React.useState(false);

    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 60) {
                setIsScroll(true);
            }
            else
            {
                setIsScroll(false);
            }
        })
    },[])

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} className='w-full' alt="Header Background"/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/60 shadow-md backdrop-blur-lg transition-all duration-300' : ''}`}>
            <a href="#top">
                <Image src={logo1} className='cursor-pointer w-28 mr-14' alt="Logo" />
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 absolute left-1/2 -translate-x-1/2 ${isScroll ? '':'bg-white/60 shadow-md backdrop-blur-lg transition-all duration-300'}`}>
                <li><a href="#top" className='font-ovo'>Home</a></li>
                <li><a href="#about" className='font-ovo'>About</a></li>
                <li><a href="#projects" className='font-ovo'>Projects</a></li>
                <li><a href="#contact" className='font-ovo'>Contact</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button >
                    <Image src={assets.moon_icon} alt="" className='w-6'></Image>
                </button>
                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ">Contact <Image src={assets.arrow_icon} className='w-3' alt="Contact" /></a>
                <button className='block ml-3 md:hidden'>
                    <Image src={assets.menu_black} alt='' className='w-6' onClick={openSideMenu}/>
                </button>
            </div>

            {/* Mobile Navigation */}

            <ul ref={sideMenuRef} className='fixed top-0 bottom-0 z-50 flex flex-col items-center w-64 h-screen gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-rose-50'>
                <div className='absolute right-6 top-6' onClick={closeSideMenu}>
                    <Image src = {assets.close_black} alt="" className='w-5 cursor-pointer' />
                </div>
                <li><a href="#top" className='font-ovo' onClick={closeSideMenu}>Home</a></li>
                <li><a href="#about" className='font-ovo' onClick={closeSideMenu}>About</a></li>
                <li><a href="#projects" className='font-ovo' onClick={closeSideMenu}>Projects</a></li>
                <li><a href="#contact" className='font-ovo' onClick={closeSideMenu}>Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;