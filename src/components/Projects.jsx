import React from "react";
import blog from "../assets/Blog.png";
import boomer from "../assets/Boomer.png";
import Disney from "../assets/Dismey.png";
import KhaoPio from "../assets/KhaoPio.png";
import notesApp from "../assets/notesApp.png";
import toDo from "../assets/ToDo.png";

import project from "../assets/project.png";

function Projects() {
  const projects = [
    {
      id: 1,
      Name: "Boomer - Social Media App",
      src: boomer,
      Live: "https://socialmedia-boomer.netlify.app/",
      code: "https://github.com/ankittbisht/SocialMediaApp-Boomer-",
    },
    {
      id: 2,
      Name: "KhaoPio",
      src: KhaoPio,
      Live: "https://khao-pio.netlify.app/",
      code: "https://github.com/ankittbisht/Khao-Pio",
    },
    {
      id: 3,
      Name: "Keeper-Notes",
      src: notesApp,
      Live: "https://keeperminiproject.netlify.app/",
      code: "https://github.com/ankittbisht/Keeper-Application",
    },
    {
      id: 4,
      Name: "Disney Clone",
      src: Disney,
      Live: "https://disneyyyy.netlify.app/",
      code: "https://github.com/ankittbisht/Disney-clone",
    },
    {
      id: 5,
      Name: "ToDo List",
      src: toDo,
      Live: "https://ruby-vivacious-hippopotamus.cyclic.app/",
      code: "https://github.com/ankittbisht/ToDoList",
    },
    {
      id: 6,
      Name: "Blog Post",
      src: blog,
      Live: "https://cyan-glamorous-dog.cyclic.app/",
      code: "https://github.com/ankittbisht/BlogPost",
    },
  ];

  return (
    <div name="Projects" className="w-full min-h-screen">
      <div className='"max-w-screen-lg mx-auto px-8 py-12 flex flex-col justify-center w-full h-full'>
        <div className="pb-8 items-center flex justify-center gap-4">
          <img
            src={project}
            className="w-16 hover:-rotate-12 transition duration-300 ease-in-out"
          />

          <h2 className="text-4xl md:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Projects
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-4">
          {/* //CARDS */}
          {projects.map((project) => (
            <div className="shadow-lg rounded-lg hover:scale-110 transition-all ease-in-out duration-300">
              <img src={project.src} alt="projects" className="shadow-md" />
              <h1 className="bg-[#00ABE4] text-white font-bold text-lg p-2 ">
                {project.Name}
              </h1>
              <div className="flex items-center justify-center gap-8 my-2">
                <a href={project.Live} target="_blank">
                  <button className="text-[#1e375a] px-8  duration-300 hover:scale-110 hover:bg-gray-100 font-semibold transition-all">
                    Live
                  </button>
                </a>
                <a href={project.code} target="_blank">
                  <button className="text-[#1e375a] px-8  duration-300 hover:scale-110 hover:bg-gray-100 font-semibold transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
