import { BriefcaseIcon, PencilIcon, CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import {events} from '../assets/assets';

export default function TimeLine() {
  

  return (
    <div className="relative max-w-4xl p-6 mx-auto">
      {/* Vertical line */}
      <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-200 rounded left-1/2"></div>

      <ul className="space-y-12">
        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <li 
              key={idx} 
              className="relative flex flex-col items-center justify-between w-full md:flex-row"
            >
              {/* Left side */}
              <div className={`w-full md:w-5/12 ${isLeft ? "text-right" : ""}`}>
                {isLeft && (
                  <div className="p-5 bg-white border border-gray-100 shadow-md rounded-xl">
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                )}
              </div>

              {/* Center Icon */}
              <div className="z-10 flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full shadow-md">
                {event.icon}
              </div>

              {/* Right side */}
              <div className={`w-full md:w-5/12 ${!isLeft ? "text-left" : ""}`}>
                {!isLeft && (
                  <div className="p-5 bg-white border border-gray-100 shadow-md rounded-xl">
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
