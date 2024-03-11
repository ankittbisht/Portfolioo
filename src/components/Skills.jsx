import React from "react";
import project from "../assets/code.png";

function Skills() {
  const techs = [
    {
      id: 1,
      name: "JAVA",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      id: 2,
      name: "JAVASCRIPT",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      id: 3,
      name: "PYTHON",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      id: 4,
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      id: 5,
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      id: 6,
      name: "TAILWINDCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      id: 7,
      name: "JQUERY",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
    },
    {
      id: 8,
      name: "MONGODB ",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 9,
      name: "EXPRESS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      id: 10,
      name: "REACT",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      id: 11,
      name: "NODE",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      id: 12,
      name: "MYSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      id: 13,
      name: "GITHUB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      id: 14,
      name: "VSCODE",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      id: 15,
      name: "INTELLIJ",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      id: 16,
      name: "BOOTSTRAP",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
  ];
  return (
    <div name ="Skills" className=" w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-6 items-center flex justify-center gap-4">
          <img
            src={project}
            className="w-16 hover:-rotate-12 transition duration-300 ease-in-out"
          />
          <h2 className=" text-4xl md:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Techincal Skills
          </h2>
        </div>
        <p className=" text-center text-xl md:text-2xl lg:text-3xl text-[#1e375a]">
          These are the technology i have worked with
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((item, index) => (
            <div
              key={item.id}
              className="hover:rotate-3 hover:scale-110 duration-300 transform rounded-lg py-2  hover:text-[#2373ff]"
            >
              <img src={item.src} className="w-20 mx-auto" />
              <p className="text-base font-medium mt-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
