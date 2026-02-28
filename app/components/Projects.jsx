import React from "react";
import Image from "next/image";
import { assets, workData } from "../assets/assets";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[10%] xl:px-[12%] 2xl:px-[15%] py-14 sm:py-20 scroll-mt-24"
    >
      {/* Heading */}
      <div className="text-center">
        <h4 className="mb-2 text-sm tracking-wide text-gray-600 sm:text-base md:text-lg">
          My Work
        </h4>

        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
          Projects
        </h2>

        <p className="max-w-md mx-auto mt-4 text-sm leading-relaxed text-gray-600 sm:max-w-xl md:max-w-2xl sm:mt-6 sm:text-base">
          Welcome to my portfolio! Here are some of the projects I have worked
          on. Each project showcases my skills in full-stack development.
        </p>
      </div>

      {/* Projects Grid */}

      <div className="mx-auto mt-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {workData?.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="relative block overflow-hidden rounded-2xl group aspect-square"
            >
              {/* Image */}
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 33vw,
            25vw
          "
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority={index < 2}
              />

              {/* Overlay */}
              <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />

              {/* Info Card */}
              <div
                className="
            absolute bottom-4 mb-4 left-1/2 -translate-x-1/2
            w-[88%]
            bg-white/95 backdrop-blur-md
            rounded-xl shadow-md
            p-4
            flex items-start justify-between gap-3
            transition-all duration-500 ease-out
            translate-y-6 group-hover:translate-y-0
          "
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold truncate sm:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-center transition duration-300 bg-white border rounded-full shadow-sm w-9 h-9 shrink-0 group-hover:bg-indigo-500">
                  <Image
                    src={assets.send_icon}
                    alt="Open Project"
                    width={16}
                    height={16}
                    className="transition duration-300 group-hover:invert"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-14 sm:mt-20">
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-2 text-sm transition duration-300 border border-gray-700 rounded-full sm:py-3 sm:px-10 sm:text-base hover:bg-gray-100"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="Right Arrow"
            width={16}
            height={16}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
