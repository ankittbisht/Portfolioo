import React from "react";
import coursera from "../assets/coursera1.png";
import infosys from "../assets/download.png";
import ibm from "../assets/ibm1.svg";
import udemy from "../assets/udemy.png";
import Certificate from "../assets/certificate.png";

import { RxOpenInNewWindow } from "react-icons/rx";

function Certifications() {
  const certificates = [
    {
      id: 1,
      name: "The Full Stack Web Development",
      src: "https://drive.google.com/file/d/1rJqE9nV-epq0Cuy0HkTeS5qtzOBqSvxd/view",
      image: infosys,
    },
    {
      id: 2,
      name: "Data Structures",
      src: "https://www.coursera.org/account/accomplishments/certificate/XXD47U5Y6ULB",
      image: coursera,
    },
    {
      id: 8,
      name: "Introduction to Web Development with HTML, CSS, JavaScript",
      src: "https://www.coursera.org/account/accomplishments/certificate/59G6PK4U34DL",
      image: ibm,
    },
    {
      id: 4,
      name: "Java Programming: Arrays, Lists, and Structured Data",
      src: "https://www.coursera.org/account/accomplishments/certificate/SRVDZB8DBRKX",
      image: coursera,
    },
    {
      id: 5,
      name: "Developing Cloud Apps with Node.js and React",
      src: "https://www.coursera.org/account/accomplishments/verify/UY22U4SYGJS7",
      image: ibm,
    },
    {
      id: 6,
      name: "The Complete React Developer Course",
      src: "https://drive.google.com/file/d/1rYn3JG0fhkfXO4IxMeihtm4UF9j5RWTT/view",
      image: infosys,
    },
    ,
    {
      id: 3,
      name: "Object Oriented Programming in Java",
      src: "https://www.coursera.org/account/accomplishments/certificate/ZXYRJLSM8GXY",
      image: coursera,
    },
    {
      id: 7,
      name: "The Complete 2023 Web Development Bootcamp",
      src: "https://udemy.com/certificate/UC-ef1cf53c-16fc-4724-8fea-8cd737787862/",
      image: udemy,
    },

    {
      id: 9,
      name: "Django Application Development with SQL and Databases ",
      src: "https://www.coursera.org/account/accomplishments/verify/MCBPR2FUFPLX",
      image: ibm,
    },
    {
      id: 10,
      name: "Programming using Java",
      src: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012880464547618816347_shared/1-5cb27644-c0e4-43f8-9275-327374f9b0a9.pdf",
      image: infosys,
    },
    {
      id: 11,
      name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      src: "https://www.coursera.org/account/accomplishments/verify/3TCTD49LV8AG",
      image: ibm,
    },
  ];
  return (
    <div name="Certifications" className="w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto py-8 px-8 flex flex-col justify-center w-full h-full ">
        <div className="pb-6 items-center flex justify-center gap-4">
          <img
            src={Certificate}
            className="w-16 hover:-rotate-12 transition duration-300 ease-in-out"
          />
          <h2 className=" text-4xl md:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Certifications
        </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-12  items-center text-center py-10 px-0 ">
          {certificates.map((item, index) => (
            <div
              key={item.id}
              className="shadow-lg rounded-lg hover:scale-110 transition-all ease-in-out duration-300 flex flex-col items-end"
            >
              <a href={item.src} target="_blank">
                <button className="text-[#1e375a] hover:bg-gray-300  font-semibold transition-all flex gap-2 justify-center items-center p-2 rounded-lg border-2 border-gray-400">
                  Show Credential <RxOpenInNewWindow />
                </button>
              </a>
              <img src={item.image} alt="projects" className="h-24  md:h-32  object-fill mx-auto " />
              <div className="bg-[#00ABE4] text-white font-medium text-lg p-2 rounded-b-lg w-full">
                <h1>{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
