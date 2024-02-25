import React, { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import IsLoading from "../components/IsLoading";
import "./ProjectsPage.css";

function ProjectsPage() {
  const { projects, isLoading, error, refetchProjects } = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);

  if (isLoading) {
    return <IsLoading />
  }

  if (error) {
    return (<p>{errorMessage}</p>)
  }

  return (
    <div id="project-list">
    <h1>Add a sort function later?</h1>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          <p>{errorMessage}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
      {!isLoading && !error && (
        projects.map((projectData, key) => (
          <ProjectCard key={key} projectData={projectData} />
        ))
      )}
    </div>
  );
}

export default ProjectsPage;