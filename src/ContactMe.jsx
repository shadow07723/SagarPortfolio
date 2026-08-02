import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ContactMe() {
  return (
    <div id="ContactMe" className=" grid lg:grid-cols-2  gap-9 items-center justify-center   min-w-[320px] w-screen overflow-x-auto my-5  ">
      <div className="flex flex-col gap-4 justify-center items-center py-7 bg-[#03045e] lg:bg-white   shadow-md shadow-gray-900 lg:shadow-none   w-screen lg:w-auto ">
        <div>
          <span className="flex items-center gap-4 text-2xl font-semibold">
            <MdEmail className="text-blue-600" />
            <a
              href="mailto:raysagar056@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white lg:text-black"
            >
              raysagar056@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-4 text-2xl font-semibold">
            <IoCall className="text-blue-600" /> <a href="tel:+917723977481" className="text-white lg:text-black">+91 7723977481</a>
          </span>

          <span className="flex items-center gap-4 text-2xl font-semibold">
            <FaLocationDot className="text-blue-600" />
            <a
              href="https://www.google.com/maps/place/Raysagar056"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white lg:text-black"
            >
              Location
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-2xl tracking-[2px]">Let's Connect</h1>
        <div className="flex flex-col gap-4 ">
          <span className="flex items-center gap-4 text-sm font-semibold">
            <FaLinkedinIn className="text-blue-900 text-2xl" />
            <a
              href="https://www.linkedin.com/in/sagar-ray-03085039a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn.com/in/sagar-ray-03085039a
            </a>
          </span>
          <span className="flex items-center gap-4 text-sm font-semibold">
            <FaGithub className=" text-2xl" />{" "}
            <a
              href="https://github.com/shadow07723"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub.com/shadow07723
            </a>
          </span>
          <span className="flex items-center gap-4 text-sm font-semibold">
            <FaTwitter className="text-blue-400 text-2xl" />{" "}
            <a
              href="https://twitter.com/raysagar056"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter.com/raysagar056
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
