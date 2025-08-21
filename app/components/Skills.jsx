import React from "react";
import { tech } from "../assets/assets";
import { toolsData } from "../assets/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <>
      {/* Skills */}
      <div className="flex items-center justify-center w-full mt-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="p-5 text-3xl">
            <span className="font-bold hero-text">Skills and Tools</span> 🚀
          </h1>
          <div className="flex items-center justify-center w-full mt-10">
            <div className="max-w-5xl py-5 bg-white border border-gray-500 rounded-md w-[60%]">
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-4">
                <Marquee gradient={false} speed={60} className="py-3">
                  {tech.map((t, i) => (
                    <div
                      key={`row1-${i}`}
                      className="flex items-center px-4 py-1 mx-2 bg-black rounded-md"
                    >
                      {t.icon}
                      <span className="ml-2 font-semibold text-white">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </Marquee>

                <Marquee gradient={false} direction="right" speed={80}>
                  {tech.map((t, i) => (
                    <div
                      key={`row2-${i}`}
                      className="flex items-center px-4 py-1 mx-2 bg-black rounded-md"
                    >
                      {t.icon}
                      <span className="ml-2 font-semibold text-white">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </Marquee>

                <Marquee gradient={false} speed={60} className="py-3">
                  {tech.map((t, i) => (
                    <div
                      key={`row3-${i}`}
                      className="flex items-center px-4 py-1 mx-2 bg-black rounded-md"
                    >
                      {t.icon}
                      <span className="ml-2 font-semibold text-white">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Tools */}
      <div className="flex flex-col items-center justify-center">
        <h4 className="my-6 font-semibold text-gray-700 font-ovo">
          Gears I Code With
        </h4>
        <ul className="flex items-center gap-3 sm:gap-5">
          {toolsData.map((tool, index) => (
            <li
              className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg shadow-md cursor-pointer sm:w-14 aspect-square hover:-translate-y-1 shadow-gray-300"
              key={index}
            >
              <Image src={tool} alt="tool" className="w-5 sm:w-7" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
