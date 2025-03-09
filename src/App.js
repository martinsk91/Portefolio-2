import React from "react";
import ProjectCard from "./components/ProjectCard.js";
import projects from "./variabels/projects.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Projects/>
    </>
  );
};

export default App;

