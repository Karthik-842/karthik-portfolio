import React from 'react'
import Image from 'next/image';
import logo1 from '../assets/logo1.png'; // Adjust the path as necessary
import { assets } from '../assets/assets'; // Adjust the path as necessary

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src = {logo1} alt="Logo" className='mx-auto mb-2 w-36' />
            <div className='flex items-center justify-center gap-2 mx-auto mb-4'>
                <Image src={assets.mail_icon} alt="Mail Icon" className='w-6' />
                karthikkamal842@gmail.com
            </div>
        </div>

        <div className='items-center justify-between px-8 py-6 text-center border border-gray-200 sm:flex mx-[10%] mt-12'>
            <p> 2025 Karthik T. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-4 mt-4 sm:mt-0'>
                <li><a href="https://github.com/karthik842" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/karthik842/" target='_blank'>LinkedIn</a></li>
                <li><a href="https://twitter.com/karthik842" target='_blank'>Twitter</a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer