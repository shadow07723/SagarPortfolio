import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoFolderOpen } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

function QuikOption() {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="min-w-[320px] overflow-x-auto lg:hidden flex items-center justify-center xl:gap-4 gap-3 text-xl  font-bold z-50 fixed bottom-0 w-screen  p-2">
      <div className="flex items-center justify-center md:gap-10 gap-9 text-xl bg-[#03045e] text-white  font-bold z-50 w-fit h-10  p-2 rounded-full shadow-md shadow-gray-900 ">
        <a href="#">
          <IoIosHome />
        </a>
        <a href=""><IoMdPerson onClick={() => scrollToSection("about")} /></a>
        <a href=""><IoFolderOpen onClick={() => scrollToSection("project")} /></a>
        <a href=""><FaRegFileAlt onClick={() => scrollToSection("resume")} /></a>
        <a href=""><MdEmail onClick={() => scrollToSection("ContactMe")} /></a>
      </div>
    </div>
  );
}

export default QuikOption;
