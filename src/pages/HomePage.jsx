import React, { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import IsLoading from "../components/IsLoading";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);
  const featuredProject = projects[0]; // Assuming the first project is featured
  const latestProjects = projects.slice(1, 5); // Get the last 4 latest projects
  
  if (isLoading) {
    return <IsLoading />
  }

  if (error) {
    return (<p>{errorMessage}</p>)
  }

  return (
    <div id="featured-list">
      <h1>Featured</h1>
      <div className="featured-project">
        <ProjectCard projectData={featuredProject} />
      </div>
      <h2>Recent Campains</h2>
      {latestProjects.map((projectData, key) => (
        <div key={key} className="recent-list">
          <ProjectCard projectData={projectData} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;