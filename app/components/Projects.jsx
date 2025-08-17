import React from 'react'
import Image from 'next/image';
import { assets, workData } from '../assets/assets'

const Projects = () => {
  return (
    <div id = 'projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='mb-2 font-sans text-lg text-center'>My Work</h4>
        <h2 className='text-5xl font-semibold text-center'>Projects</h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 font-serif text-center'>
            Welcome to my portfolio! Here are some of the projects I have worked on. Each project showcases my skills in full-stack development, including front-end and back-end technologies. Feel free to explore them!
        </p>


        <div className='grid grid-cols-1 gap-6 my-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {workData.map((project, index) => (
    <div
      key={index}
      className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer group aspect-square'
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
        <div className='absolute flex items-center justify-center w-10/12 px-5 py-3 duration-500 -translate-x-1/2 translate-y-4 bg-white rounded-md shadow-lg bottom-6 left-1/2 group-hover:translate-y-0 hover:shadow-xl'>
            <div>
                <h2 className='font-semibold '>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
            </div>
            <div className='flex items-center justify-center w-8 h-8 gap-2 ml-4 transition duration-300 bg-white border border-gray-300 rounded-full shadow-md aspect-auto group-hover:bg-indigo-200'>
                <Image src={assets.send_icon} alt="Send Icon" className='w-5' />
            </div>
        </div>
        </div>
        ))}
        </div>

        <a href = "" className='flex items-center justify-center gap-2 text-gray-700 w-max border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500'>Show more
            <Image src={assets.right_arrow_bold} alt="Right Arrow" className='inline w-4 ml-2' />
        </a>

    </div>
  )
}

export default Projects