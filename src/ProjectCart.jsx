import React from 'react'
import Project from './Project.jsx'

function ProjectCart() {
  const project=[
    {id:1, img:"/Support India _ Online Government & Digital Services - Google Chrome 01-08-2026 20_44_48.png" , title:"Support in our offichil quiry", pera:" this wepsite helping your offichily quiry reletid like Adhar,pan, voterid",skil1:"HTML",skil2:"tailwind CSS",skil3:"React", livelink:"Live Demo",githubLink:"GitHub"},

    {id:2, img:"/Support India _ Online Government & Digital Services - Google Chrome 01-08-2026 20_47_29.png" , title:"Two Number Matching Game", pera:" A fun game where players match pairs of numbers.",skil1:"HTML",skil2:"tailwind CSS",skil3:"React", livelink:"Live Demo",githubLink:"GitHub"},

    {id:3, img:"/Capture001.png" , title:"Choose Your Adventure", pera:" An interactive story where players make choices that affect the outcome.",skil1:"HTML",skil2:"tailwind CSS",skil3:"React", livelink:"Live Demo",githubLink:"GitHub"},



  ]
  return (
    <div>
      <Project project={project} />
    </div>
  )
}

export default ProjectCart
