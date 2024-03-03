import { useState, useEffect } from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import IsLoading from "../components/IsLoading/IsLoading";
import "./AllProjectsPage.css";

function AllProjectsPage() {
  const { projects, isLoading, error} = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);

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
    <div>
      <h1>Add a sort function later?</h1>
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
  );
}

export default AllProjectsPage;