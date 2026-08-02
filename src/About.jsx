import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto p-4 sm:px-6  min-w-[320px]  grid xl:grid-cols-3 md:grid-cols-2 shadow-md  rounded-xl  shadow-gray-800 mt-5 "
    >
      {/* //!About me poster img */}
      <div className=" hidden xl:flex items-center justify-center">
        <img src="/Aboutme logo.jpeg" alt="" className="h-[25vh] w-[25vw]" />
      </div>

      {/* //!About me Decription */}

      <div className=" ms-5 ">
        <div className="flex xl:flex-col mt-6 gap-3 items-center">
          <IoMdPerson className="xl:hidden text-4xl text-purple-500 font-bold bg-purple-200 rounded-sm" />
          <h1 className="text-2xl font-semibold">About Me</h1>
          <hr className="border-2 w-9 hidden xl:block" />
        </div>
        <p className=" mt-5">
          i'm a passionate Frontend fullStack Developer who loves building
          clean,effcient and user-friendly web application
        </p>
      </div>
      {/* //!About me Skills */}
      <div className=" flex flex-col gap-3 justify-center ms-6 sm:mt-4">
        {/* //! Education section */}
        <div className="flex items-center gap-3">
          <div>
            <FaGraduationCap className="text-3xl" />
          </div>
          <div>
            <h1>Education</h1>
            <p>B.C.A. in Computer Science 2021-2025</p>
          </div>
        </div>
        {/* //! Skills section */}
        <div className="flex  gap-3">
          <div>
            <FaBriefcase className="text-3xl" />
          </div>
          <div>
            <h1>Experience</h1>
            <p>Fresher</p>
          </div>
        </div>
        {/* //! Skills Language */}
        <div className="flex  gap-3">
          <div>
            <SiSkillshare className="text-3xl" />
          </div>
          <div>
            <h1>Experience</h1>
            <p>Fresher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
