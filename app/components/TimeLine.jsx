"use client"; // (if using Next.js App Router)
import { motion } from "framer-motion";
import { events } from "../assets/assets";

export default function TimeLine() {
  return (    
  <div id="about" className="relative max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <h2 className="py-4 mb-4 text-5xl text-center font-ovo">About Me</h2>
      {/* Vertical line */}
      <div className="absolute w-1 transform -translate-x-1/2 bg-gray-200 rounded h-[80%] left-6 md:left-1/2 md:translate-x-1/2"></div>

      <ul className="space-y-16">
        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.li
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center"
              initial={{
                opacity: 0,
                x: isLeft ? -100 : 100, // slide from left OR right
                y: 50,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
            >
              {/* Left content (desktop only for even items) */}
              <div
                className={`hidden md:block md:w-5/12 ${
                  isLeft ? "text-right pr-6" : ""
                }`}
              >
                {isLeft && (
                  <div className="p-5 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg">
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                )}
              </div>

              {/* Center Icon */}
              <motion.div
                className="absolute z-10 flex items-center justify-center w-12 h-12 text-white transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow-md top-1/2 left-5 md:left-1/2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {event.icon}
              </motion.div>

              {/* Right content (mobile always, desktop for odd items) */}
              <div
                className={`w-full md:w-5/12 md:ml-auto ${
                  !isLeft ? "text-left pl-6" : "md:hidden"
                }`}
              >
                <div className="p-5 ml-16 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg md:ml-0">
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
