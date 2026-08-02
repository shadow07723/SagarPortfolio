import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
function Resume() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/1 FOUNDATION COURSE -1 HINDI.pdf";  
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    
      <div id="resume" className=" grid grid-cols-2 justify-between items-center bg-[#03045e] p-4 shadow-md shadow-gray-900 my-5 min-w-[320px] overflow-x-auto">
        <div className="flex justify-center items-center gap-4">
          <div>
            <FaRegFileAlt  className="text-6xl text-white" />
          </div>
          
          <div>
            <h1 className="font-bold text-2xl tracking-[2px] text-white">Resume</h1>
            <p className="text-white">
              Download my resume to know more <br /> about my experience and skills.
            </p>
          </div>

          
        </div>

        <div className="flex justify-center ">
          <button onClick={downloadCV} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex gap-4 items-center">
            Download Resume <MdOutlineFileDownload />
          </button>
        </div>
        
      </div> 
         
  )
}

export default Resume
