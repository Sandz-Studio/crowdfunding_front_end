import { useState, useEffect } from 'react';
import useProjects from "../../hooks/use-projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import IsLoading from "../../components/IsLoading/IsLoading";
import "./AllProjectsPage.css";

function AllProjectsPage() {
  const { projects, isLoading, error} = useProjects();
  const [errorMessage, setErrorMessage] = useState(null);

  // It's utilized to handle side effects in function components. 
  // In this case, it sets an error message when there's an error fetching projects. 
  // It runs only when error changes.
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
    <div className="all-projects">
      <h1>Add a sort function later?</h1>
        <div className="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
  );
}

export default AllProjectsPage;