import React from "react";
import { CiShare1 } from "react-icons/ci";

function Project({ project }) {
  return (
    <div
      id="project"
      className="grid justify-center min-w-[320px] overflow-x-auto "
    >
      <div className="grid justify-center ">
        <h1 className="font-bold text-2xl tracking-[2px]">Project</h1>
        <hr className="w-7 border-2" />
      </div>
      <div className="flex flex-wrap container mx-auto p-4  shadow-md shadow-gray-900 my-5 rounded-xl  gap-4 justify-center">
        {project.map((project) => (
          <div key={project.id} className="border rounded-lg  p-3 text-center">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-32 mx-auto object-contain"
            />

            <h2 className="mt-2 font-semibold">{project.title}</h2>
            <p className="mt-2">{project.pera}</p>

            <div className="grid justify-center gap-2 mt-2 ">
              <div className="flex justify-center gap-2 mt-2">
                <span className="px-2 py-1 bg-gray-200 rounded">
                  {project.skil1}
                </span>
                <span className="px-2 py-1 bg-gray-200 rounded">
                  {project.skil2}
                </span>
                <span className="px-2 py-1 bg-gray-200 rounded">
                  {project.skil3}
                </span>
              </div>

              <div className="flex gap-30 mt-2 ">
                <a
                  href={
                    project.id === 1
                      ? "https://supportin.in/"
                      : project.id === 2
                        ? "https://shadow07723.github.io/two-num-maching-luck/"
                        : project.id === 3
                          ? "https://shadow07723.github.io/luck10/"
                          : "#"
                  }
                  className="px-2 py-1 bg-gray-200 rounded w-fit flex items-center gap-2 flex-nowrap text-purple-700 cursor-pointer"
                >
                  {project.livelink}
                  <CiShare1 />
                </a>
                <a
                  href={
                    project.id === 1
                      ? "https://github.com/shadow07723"
                      : project.id === 2
                        ? "https://github.com/shadow07723"
                        : project.id === 3
                          ? "https://github.com/shadow07723"
                          : "#"
                  }
                  className="px-2 py-1 bg-gray-200 rounded  text-purple-700 cursor-pointer"
                >
                  {project.githubLink}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
