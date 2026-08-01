import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import SkillCard from "./SkillCard.jsx";
import ProjectCart from "./ProjectCart.jsx";

import NetworkStatus from "./NetworkStatus.jsx";
import ServicesCard from "./ServicesCard.jsx";
import Cv from "./Resume.jsx";
import Resume from "./Resume.jsx";
import ContactMe from "./ContactMe.jsx";  
import QuikOption from "./QuikOption.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Banner />
    <About />
    <SkillCard />
    <ProjectCart />
    <ServicesCard />
    <Resume />
    <ContactMe />
    <QuikOption />

    {/* <NetworkStatus />  */}
  </StrictMode>,
);
