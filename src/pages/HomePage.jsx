import React, { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);
  const featuredProject = projects[0]; // Assuming the first project is featured
  const latestProjects = projects.slice(1, 5); // Get the last 4 latest projects
  
  if (isLoading) {
    return (<p>loading...</p>)
  }

  if (error) {
    return (<p>{errorMessage}</p>)
  }

  return (
    <div id="featured-list">
      <div className="featured-project">
        <ProjectCard projectData={featuredProject} />
      </div>
      {latestProjects.map((projectData, key) => (
        <div key={key}>
          <ProjectCard projectData={projectData} />
        </div>
      ))}
    </div>
  );

  // return (
  //   <div id="project-list">
  //     {isLoading && <div>Loading...</div>}
  //     {error && (
  //       <div>
  //         <p>{errorMessage}</p>
  //         <button onClick={handleRetry}>Retry</button>
  //       </div>
  //     )}
  //     {!isLoading && !error && (
  //       projects.map((projectData, key) => (
  //         <ProjectCard key={key} projectData={projectData} />
  //       ))
  //     )}
  //   </div>
  // );
}

export default HomePage;