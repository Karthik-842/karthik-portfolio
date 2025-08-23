"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
import { infoList, toolsData } from "../assets/assets"; // Adjust the path as necessary

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-7 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-ovo">Introduction</h4>
      <h2 className="mb-4 text-5xl text-center font-ovo">About Me</h2>
      <div className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row">
        <div className="relative overflow-hidden shadow-2xl w-60 sm:w-80 rounded-3xl animate-float bg-gradient-to-br from-blue-500 to-indigo-600">
          <Image
            src={assets.avatar_11}
            alt="User avatar"
            className="object-cover w-full h-full rounded-3xl"
            priority
          />
        </div>
        <div className="flex-1">
          <p className="max-w-2xl mb-10 font-ovo">
            Hello! I'm Karthik T, a Full Stack Developer with a passion for
            creating dynamic and responsive web applications. I specialize in
            both front-end and back-end development, ensuring that every project
            I work on is not only functional but also visually appealing.
          </p>
          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 p-4 rounded-xl cursor-pointer hover:bg-rose-50 hover:-translate-y-1 duration-500 shadow-stone-300 hover:shadow-xl transition-shadow"
                key={index}
              >
                <Image src={icon} alt={title} className="w-6 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
