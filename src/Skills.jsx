import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Skills({ Skill }) {
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth >= 1024) {
        setLimit(7);
      } else if (window.innerWidth >= 768) {
        setLimit(5);
      } else {
        setLimit(3);
      }
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const visibleCards = showAll ? Skill : Skill.slice(0, limit);

  return (
    <div id="skills" className="container mx-auto p-4 min-w-[320px] overflow-x-auto shadow-md shadow-gray-900 my-5 rounded-xl">
      <div className="grid justify-center ">
        <h1 className="font-bold text-2xl tracking-[2px]">Skill</h1>
        <hr className="w-7 border-2" />
      </div>
      <div>
        {Skill.length > limit && (
          <div className="flex justify-end ">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" flex items-center text-blue-700"
            >
              {showAll ? "Show Less " : "See All"}
              <FaAngleDoubleRight />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {visibleCards.map((Skill) => (
          <div
            key={Skill.id}
            className={`border rounded-lg  p-3 text-center  ${Skill.title === ".Net" || Skill.title === "PostMan" || Skill.title === "Node JS" ? "opacity-30" : "shadow-lg"}`}
          >
            <img
              src={Skill.img}
              alt={Skill.title}
              className="w-16 h-16 mx-auto object-contain"
            />

            <h2 className="mt-2 font-semibold">{Skill.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
