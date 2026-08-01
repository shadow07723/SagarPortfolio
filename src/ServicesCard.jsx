import React from 'react'
import Services from './Services';
import { AiOutlineGlobal } from "react-icons/ai";
import { SiDevbox } from "react-icons/si";
import { BsBrushFill } from "react-icons/bs";

function ServicesCard() {
    const services = [
        {id:1, icon:<AiOutlineGlobal /> , title:"Web Development", pera:"REsponsive and modern websites "},
        {id:2, icon:<SiDevbox /> , title:"Frontend Development", pera:"interactive UI using HTML,CSS,JavaScript,etc."},
        {id:3, icon:<BsBrushFill /> , title:"UI/UX Design", pera:"Designing user-friendly interfaces and experiences"},
    ];
  return (
    <div>
        <Services services={services} />
      
    </div>
  )
}

export default ServicesCard
