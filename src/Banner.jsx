import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaLinkedinIn } from "react-icons/fa6";

function Banner() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth",block: "start" });
  }
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/1 FOUNDATION COURSE -1 HINDI.pdf";  
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="banner" className="max-w-8xl min-w-[320px] overflow-x-auto md:overflow-hidden h-[70vh] md:h-[50vh] bg-[#03045e] mt-15 md:mt-20 grid grid-rows-[45%_55%] md:grid-rows-1 md:grid-cols-2  items-center">
      <div className=" flex flex-col mx-auto ">
        <h3 className=" text-xl text-white">Hi, i'm</h3>
        <h1 className="text-3xl text-blue-500 font-bold">Sagar</h1>
        <h3 className="text-2xl text-white font-semibold">
          MERN stack Doveloper
        </h3>
        <p className="text-white opacity-70 ">I build responsive and user-friendly web appilcation</p>

        <div className="flex gap-4 md:mt-7 mt-4">
          <button onClick={() => scrollToSection("project")} className="border-2 rounded-sm py-1 px-1 flex items-center bg-blue-800 text-white cursor-pointer text-sm">
            View Project <MdKeyboardArrowRight />
          </button>
          <button onClick={downloadCV} className="border-2 rounded-sm py-1 px-1 flex items-center bg-blue-800 text-white cursor-pointer text-sm">
            Download CV <MdOutlineFileDownload />
          </button>
        </div>

        <div className="flex gap-4 md:mt-7 mt-4 ">
          <a href="https://github.com/sagar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl"/>
          </a>
          <a href="https://www.linkedin.com/in/sagar-ray-03085039a?utm_source=share_via&utm_content=profile&utm_medium=member_androidgi" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-2xl text-blue-800"/>
          </a>
          <a href="https://twitter.com/sagar" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-500" />
          </a>
          <a href="mailto:sagar@example.com">
            <MdEmail className="text-2xl text-amber-50" />
          </a>
        </div>
      </div>

      <div className="h-[35vh] w-[35vh] md:h-[30vh] lg:w-[40vh] lg:h-[40vh] md:w-[30vh] rounded-full border-2 mx-auto justify-center flex items-start">
        <img src="/my portfolio picher.jpeg" alt="sagar" className=" h-[35vh] w-[35vh] md:h-[30vh] lg:w-[40vh] lg:h-[40vh] md:w-[30vh] rounded-full " />
      </div>
    </section>
  );
}

export default Banner;