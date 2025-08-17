import { BookOpenIcon, GraduationCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import {events} from '../assets/assets';

export default function TimeLine() {
  

  return (
    <div className="relative max-w-4xl p-10 mx-auto">
  {/* Vertical line */}
  <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-200 rounded left-6 md:left-1/2 md:translate-x-1/2"></div>

  <ul className="space-y-16">
    {events.map((event, idx) => {
      const isLeft = idx % 2 === 0;

      return (
        <li key={idx} className="relative flex flex-col md:flex-row md:items-center">
          
          {/* Left content (desktop for even items only) */}
          <div className={`hidden md:block md:w-5/12 ${isLeft ? "text-right" : ""}`}>
            {isLeft && (
              <div className="p-5 bg-white border border-gray-100 shadow-md cursor-pointer rounded-xl">
                <p className="text-sm text-gray-500">{event.date}</p>
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </div>
            )}
          </div>

          {/* Center Icon */}
          <div
            className="absolute z-10 flex items-center justify-center w-12 h-12 text-white transform -translate-x-1/2 bg-blue-500 rounded-full shadow-md -translate-y-1/ top-1/2 left-5 md:left-1/2"
          >
            {event.icon}
          </div>

          {/* Right content (mobile always, desktop for odd items) */}
          <div
            className={`w-full md:w-5/12 md:ml-auto ${!isLeft ? "text-left" : "md:hidden"}`}
          >
            <div className="p-5 ml-16 bg-white border border-gray-100 shadow-md cursor-pointer md:ml-0 rounded-xl">
              <p className="text-sm text-gray-500">{event.date}</p>
              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
  
  
</div>




  );
}
