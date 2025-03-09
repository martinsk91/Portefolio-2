import React from "react";
import ProjectCard from "./ProjectCard.js"; 
import projects from "../variabels/projects.js"; 

const Projects = () => {
  return (
    <section id="projects" className="min-vh-100 bg-light py-5 px-3 my-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                repoUrl={project.repoUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
