import React from "react";
import ProjectCard from "./components/ProjectCard.js";
import projects from "./variabels/projects.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import ContactInfo from "./components/Contactinfo.js";

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <ContactInfo/>
      <Projects/>
    </>
  );
};

export default App;

