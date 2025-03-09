import React from "react";

const ProjectCard = ({ name, description, imageUrl, repoUrl, liveUrl }) => {
  return (
    <div className="card h-100">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
  <a href={repoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
    View Repo
  </a>
  <a href={liveUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
    View Live Link
  </a>
</div>
      </div>
    </div>
  );
};

export default ProjectCard;
