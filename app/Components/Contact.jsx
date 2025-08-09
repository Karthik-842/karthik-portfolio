import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { assets } from '../assets/assets'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb8d8e02-f198-42ca-87d4-0fe0c2f2d45e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
    
    
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] flex flex-col items-center' id='contact'>
        <h4 className='mb-2 font-mono text-lg text-center'>Connect with me</h4>
        <h2 className='text-5xl font-bold text-center'>Get in touch</h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>I'd love to hear from you! If you have any questions, comments or feedback, please use to the form below.</p>
        <form onSubmit={onSubmit} className='max-w-2xl max-auto'>
           <div className='grid justify-between gap-6 mt-10 mb-8 grid-cols-auto sm:grid-cols-2'>
                <input type="text" placeholder='Enter your name' required className='flex-1 bg-white border-[0.5px] border-gray-300 rounded-md p-3' name='name'></input>
                <input type="email" placeholder='Enter your email' required className='flex-1 bg-white border-[0.5px] border-gray-300 rounded-md p-3' name='email'></input>
           </div>
            <textarea rows='6' placeholder='Enter your message' className='w-full p-4 mb-6 bg-white border-[0.5px] border-gray-300 rounded-md' name='message'></textarea>
            <button type='submit' className='flex items-center justify-between gap-2 px-8 py-3 mx-auto text-white duration-500 bg-black rounded-full hover:bg-gray-800'>
                Submit now
                <Image src={assets.right_arrow_white} alt="Send Icon" className='w-5' />
            </button>

            <p className='mt-4'>{result}</p>

        </form>
    </div>
  )
}

export default Contact