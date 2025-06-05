import React from "react";
import shoppingApp from "../assets/ecomzy.jpg";
import quizApp from "../assets/quiz.jpg";
import notesApp from "../assets/notes.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#323946] min-h-[80vh] lg:pt-8 lg:pb-8 w-full px-3 py-2"
    >
      <h3 className="text-[white] lg:text-center lg:mb-4 lg:text-[2rem] text-[1.8rem] font-bold px-3">
        Web <span className="text-[#00EBFD]">Development Projects</span>
      </h3>
      <div className="project-container lg:px-36 00 min-h-[70vh] pt-4 lg:pt-0">
        <div className="px-2 lg:py-6 lg:px-4 py-4 flex relative min-h-[70vh] flex-col lg:flex-row xl:flex-row lg:gap-x-10 gap-y-10 overflow-hidden">
          <a
            href="https://ecozmy-shopping.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <img
              loading="lazy"
              src={shoppingApp}
              alt="Live Demo"
              className="object-cover min-w-[300px] lg:min-h-[100px] rounded-[20px] transition duration-300 group-hover:opacity-60 group-hover:scale-102"
            />

            {/* Overlay for text + icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex items-center gap-2 text-[#00EBFD] text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                Live Demo <FaExternalLinkAlt />
              </div>
            </div>
          </a>
          <a
            href="https://thinkquest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <img
              loading="lazy"
              src={quizApp}
              alt="Live Demo"
              className="object-cover min-w-[300px] lg:min-h-[100px] rounded-[20px] transition duration-300 group-hover:opacity-60 group-hover:scale-102"
            />

            {/* Overlay for text + icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex items-center gap-2 text-[#00EBFD] text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                Live Demo <FaExternalLinkAlt />
              </div>
            </div>
          </a>
          <a
            href="https://notes-saver-wheat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <img
              loading="lazy"
              src={notesApp}
              alt="Live Demo"
              className="object-cover min-w-[300px] lg:min-h-[100px] rounded-[20px] transition duration-300 group-hover:opacity-60 group-hover:scale-102"
            />

            {/* Overlay for text + icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex items-center gap-2 text-[#00EBFD] text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                Live Demo <FaExternalLinkAlt />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
