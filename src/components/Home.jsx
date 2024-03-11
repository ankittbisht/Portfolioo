import React from "react";
import dp from "../assets/dp.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
function Home() {
  return (
    // bg-[#00ABE4]
    <div
      name="Home"
      className="w-full h-[80vh] md:h-[70vh] flex justify-center items-start mt-8 mb-12 md:mt-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center md:items-start md:pr-8 items-center">
          <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl">
            Namaste There,
          </h1>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            I am Ankit Bisht
          </h1>
          <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
            Full Stack Developer
          </h2>
          <p className="py-4 px-8 md:px-0 max-w-[700px] text-center md:text-left ">
            Proficient in multiple programming languages and experienced in
            software development methodologies, I am eager to take on new
            challenges and make a meaningful impact in the field of software
            engineering.
          </p>
          <div name="button" className="flex gap-2 my-4">
            <Link to="Projects" smooth={true} duration={500}>
              <button className="bg-[#00ABE4] text-white px-4 py-2 hover:bg-[#2373ff] font-bold transition-transform duration-300 hover:translate-y-[-2px]">
                SEE PROJECTS
              </button>
            </Link>
            <button className=" text-[#1e375a] px-4 py-2 hover:text-[#2373ff] font-bold transition-transform duration-300 hover:translate-y-[-2px]">
              CONNECT WITH ME
            </button>
          </div>
          <div name="socials" className="flex items-center gap-5 my-4">
            <a href="https://www.linkedin.com/in/ankittbisht/" target="_blank">
              <FaLinkedin className="text-3xl hover:text-blue-700 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://github.com/ankittbisht" target="_blank">
              <FaGithub className="text-3xl hover:scale-110 transition-all duration-300 hover:text-black" />
            </a>
            <a href="https://leetcode.com/ankittbisht/" target="_blank">
              <SiLeetcode className="text-3xl hover:scale-110 transition-all duration-300 hover:text-orange-500" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/ab67743 "
              target="_blank"
            >
              <SiGeeksforgeeks className="text-3xl hover:scale-110 transition-all duration-300 hover:text-green-500" />
            </a>
            <a href="https://twitter.com/AnkittBishtt" target="_blank">
              <FaXTwitter className="text-3xl hover:scale-110 transition-all duration-300 hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-40 md:w-60 mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg shadow-lg">
          <img
            className="w-full h-full object-cover"
            src={dp}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
