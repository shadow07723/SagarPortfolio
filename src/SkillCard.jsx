import React from "react";
import Skills from "./Skills.jsx";
function SkillCard() {
  const Skill = [
    { id: 1, img: "/icons8-html-5-48.png", title: "HTML" },
    { id: 2, img: "/icons8-css-48.png", title: "CSS" },
    { id: 3, img: "/icons8-javascript-48.png", title: "JS" },
    { id: 4, img: "/icons8-react-32.png", title: "React" },
    { id: 5, img: "/icons8-nodejs-48.png", title: "Node JS" },
    { id: 6, img: "/icons8-github-30.png", title: "GitHub" },
    { id: 7, img: "/icons8-git-48.png", title: "Git" },
    { id: 8, img: "/icons8-sql-48.png", title: "SQL" },
    { id: 9, img: "/icons8-.net-framework-48.png", title: ".Net" },
    { id: 10, img: "/icons8-postman-api-64.png", title: "PostMan" },
    { id: 11, img: "/icons8-vercel-50.png", title: "Vircal" },
  ];
  return (
    <div>
      <Skills Skill={Skill} />
    </div>
  );
}

export default SkillCard;
