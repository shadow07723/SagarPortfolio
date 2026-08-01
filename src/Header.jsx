import React from "react";

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth",block: "start" });
  }
  return (
    // !mobile me 2 or dexktop me 3
    
    <div id="header" className="fixed top-0 z-50 md:h-20 h-15 scroll-x-auto w-screen bg-[#03045e] grid md:grid-cols-[30%_55%_15%]  grid-cols-[80%_20%] items-center min-w-[320px]  ">
      <div onClick={() => scrollToSection("banner")} className=" items-center flex mx-7 ">
        <h1 className="text-[#0096c7] md:text-2xl text-xl font-bold  cursor-pointer ">
          Sagar<span className="text-white">Profile</span>
        </h1>
      </div>
      <div className="  hidden md:flex items-center justify-center xl:gap-4 gap-3 text-xl text-[#0096c7] font-bold ">
        <button  onClick={() => scrollToSection("banner")} className=" cursor-pointer">Home</button>
        <button  onClick={() => scrollToSection("about")} className=" cursor-pointer">About</button>
        <button  onClick={() => scrollToSection("ContactMe")} className=" cursor-pointer">Contact</button>
        <button  onClick={() => scrollToSection("skills")} className=" cursor-pointer">Skills</button>
        <button  onClick={() => scrollToSection("project")} className=" cursor-pointer">Project</button>
        <button  onClick={() => scrollToSection("Services")} className=" cursor-pointer">Services</button>
      </div>
      <div className=" ">
        <a href="mailto:sagar@example.com" className="text-sm md:text-xl text-[#0096c7] border-2 rounded-sm hover:bg-[#48cae4]  md:p-1  md:ml-2 mr-3 md:mr-auto ">
          Hire me
        </a>
      </div>
    </div>
  );
}

export default Header;
