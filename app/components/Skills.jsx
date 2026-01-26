import React from "react";
import { tech } from "../assets/assets";
import { motion } from "framer-motion";
import { toolsData } from "../assets/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <>
      {/* Skills */}
      <div className="flex justify-center w-full pt-5 mt-10">
        <div className="flex flex-col items-center justify-center w-full px-4">
          <motion.h1 className="p-2 text-2xl font-bold text-center md:text-3xl"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}>
            <span className="font-bold hero-text">Skills and Tools</span> 🚀
          </motion.h1>

          <div className="flex items-center justify-center w-full mt-5">
            <div className="w-[50%] py-5 bg-white border border-gray-500 rounded-md max-w-5xl">
              <div className="flex flex-col items-center justify-center gap-4 px-2 py-4 sm:px-4">
                {/* Row 1 */}
                <Marquee gradient={false} speed={60} className="py-3">
                  {tech.map((t, i) => (
                    <div
                      key={`row1-${i}`}
                      className="flex items-center px-3 py-1 mx-2 bg-black rounded-md sm:px-4"
                    >
                      {t.icon}
                      <span className="ml-2 text-sm font-semibold text-white sm:text-base">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </Marquee>

                {/* Row 2 */}
                <Marquee gradient={false} direction="right" speed={80}>
                  {tech.map((t, i) => (
                    <div
                      key={`row2-${i}`}
                      className="flex items-center px-3 py-1 mx-2 bg-black rounded-md sm:px-4"
                    >
                      {t.icon}
                      <span className="ml-2 text-sm font-semibold text-white sm:text-base">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </Marquee>

                {/* Row 3 */}
                <Marquee gradient={false} speed={60} className="py-3">
                  {tech.map((t, i) => (
                    <div
                      key={`row3-${i}`}
                      className="flex items-center px-3 py-1 mx-2 bg-black rounded-md sm:px-4"
                    >
                      {t.icon}
                      <span className="ml-2 text-sm font-semibold text-white sm:text-base">
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
