import React from "react";
import ProjectCard from "./components/ProjectCard.js";
import projects from "./variabels/projects.js";
import Header from "./components/Header.js";
import About from "./components/About.js";

const App = () => {
  return (
    <>
      <Header/>
      <About/>
    <div className="min-vh-100 bg-light py-5 px-3 my-5">
      
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                repoUrl={project.repoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

