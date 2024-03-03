import { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import IsLoading from "../components/IsLoading/IsLoading";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
  const featuredProject = sortedProjects.length > 0 ? sortedProjects[0] : null;
  const latestProjects = projects.slice(1, 5); // Get the last 4 latest projects
  
  useEffect(() => {
    if (error) {
      setErrorMessage("Error fetching projects. Please try again later.");
    }
  }, [error]);

  if (isLoading) {
    return <IsLoading />;
  }

  if (error) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="featured-list">
      <h1>Featured</h1>
      <div className="featured-project">
        <ProjectCard projectData={featuredProject} />
      </div>
      {/* <h2>Recent Campains</h2> */}
      {latestProjects.map((projectData, key) => (
        <div key={key} className="recent-list">
          <ProjectCard projectData={projectData} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;