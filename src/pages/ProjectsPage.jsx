import React, { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";

function ProjectsPage() {
  const { projects, isLoading, error, refetchProjects } = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);
  
  // useEffect to handle errors
  useEffect(() => {
    if (error) {
      setErrorMessage("Error fetching projects. Please try again later.");
    }
  }, [error]);

  // Function to handle retrying the data fetching
  const handleRetry = () => {
    setErrorMessage(null); // Clear error message
    refetchProjects(); // Retry fetching projects
  };

  return (
    <div id="project-list">
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