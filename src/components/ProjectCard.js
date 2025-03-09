import React from "react";

const ProjectCard = ({ name, description, imageUrl, repoUrl }) => {
  return (
    <div className="card h-100">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={repoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
