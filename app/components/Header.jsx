import React from 'react'
import Image from 'next/image';
import {assets} from '../assets/assets'; // Adjust the path as necessary 

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
        <div className='mt-20'>
            <Image src= {assets.profile_img} alt='' className='w-32 h-32 rounded-full'/>
        </div>
        <h3 className="flex items-center gap-2 mb-3 text-xl md:text-2xl">Hi! I'm 
        <span className="font-extrabold hero-text"> Karthik T</span> </h3> 
        <h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-bold mb-2 font-outfit'>
            Full Stack Developer with a passion for building web applications.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>I specialize in creating dynamic and responsive web applications using the latest technologies.</p>

        <div className='flex flex-col items-center gap-4 sm:flex-row '>
            <a href='#contact' className='flex items-center gap-2 px-10 py-3 mt-4 text-black transition duration-300 bg-white border border-gray-500 rounded-full hover:bg-lightHover dark:hover:bg-darkHover hover:text-black dark:hover:text-blue-600 font-ovo'
            >Contact Me <Image src={assets.right_arrow} className='w-4' alt="Contact" /></a>
            <a href='/sample-resume.pdf' download
            className='flex items-center gap-2 px-10 py-3 mt-4 text-black transition duration-300 bg-white border border-gray-500 rounded-full hover:bg-lightHover dark:hover:bg-darkHover hover:text-black dark:hover:text-blue-600 font-ovo'
            >My Resume <Image src={assets.download_icon} className='w-4' alt="Download" /></a>
        </div>
        
        <div className='flex items-center justify-center px-6 border border-gray-200 rounded-full shadow-inherit hover:shadow-md bg-white/60 backdrop-blur-lg'> 
          <ul className='flex gap-6 px-3 py-2 bg-transparent rounded-full'>
                <li><a href="https://github.com/karthik842" target='_blank'></a>
                <svg className='w-10 h-10 transition-all duration-200 hover:fill-amber-600 hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                 </li>
                <li><a href="https://www.linkedin.com/in/karthik-t-87033736a/" target='_blank'>
                <svg className='w-10 h-10 transition-colors duration-200 hover:fill-blue-600 hover:-translate-y-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                </a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=9597983495" target='_blank'>
                <svg className='w-10 h-10 transition-colors duration-200 hover:fill-green-500 hover:-translate-y-1'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
                </a></li>
                <li><a href="mailto:karthikkamal842@gmail.com" target='_blank'>
                <svg className='w-10 h-10 transition-colors duration-200 hover:fill-red-400 hover:-translate-y-1'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
                </svg>
                </a></li>
          </ul>
        </div>
        
    </div>
  )
}

export default Header