import { useState } from "react";
import logo from "../assets/programmer.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

import { Link } from "react-scroll";

import resume from "../assets/Resume.pdf"
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const clicked = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="flex justify-between items-center 
    w-[92%] mx-auto mt-6 border-b border-gray-200 pb-4 font-semibold"
    >
      <div>
        <img className="w-16 " src={logo} alt="logo" />
      </div>
      <div
        className={`absolute min-h-[60vh] bg-white ${
          toggle ? " top-[20%] text-center" : "md:static min-h-fit  top-[-100%]"
        } left-0 w-full flex items-center justify-center transition-all  duration-500`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[4vw] ">
          <li>
            <Link
              to="Home"
              smooth={true}
              duration={500}
              className="  hover:text-[#2364d2] hover:underline underline-offset-8 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              className="  hover:text-[#2364d2] hover:underline underline-offset-8 cursor-pointer"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="  hover:text-[#2364d2] hover:underline underline-offset-8 cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="Certifications"
              smooth={true}
              duration={500}
              className="  hover:text-[#2364d2] hover:underline underline-offset-8 cursor-pointer"
            >
              CERTIFICATION
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="  hover:text-[#2364d2] hover:underline underline-offset-8 cursor-pointer"
            >
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        {/* E9F1FA */}
        {/* #00ABE4 */}
        <a
          href= {resume}
          download
          className="bg-[#00ABE4] rounded-full text-white px-4 py-2 hover:bg-[#2373ff] flex gap-2 items-center hover:scale-110 transition-all duration-300"
        >
          RESUME <FaFileDownload className="text-base cursor-pointer" />
        </a>
        {!toggle ? (
          <IoMenu
            onClick={() => {
              clicked();
            }}
            className="text-4xl cursor-pointer md:hidden"
          />
        ) : (
          <IoClose
            onClick={() => {
              clicked();
            }}
            className="text-4xl cursor-pointer md:hidden"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
