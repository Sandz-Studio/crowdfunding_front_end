import { useParams } from "react-router-dom";
import useProject from "../../hooks/use-project.js";
import CreatePledgeForm from "../../components/CreatePledge/CreatePledgeForm.jsx";
import IsLoading from "../../components/IsLoading/IsLoading";

// attempting to update project
// import { useContext } from "react";
// import { AuthContext } from "../../components/AuthProvider";
// import putUpdateProject from "../../api/put-project.js";

import "./ProjectPage.css";



function ProjectPage() {
  const { id } = useParams();

  // const { auth } = useContext(AuthContext);
  
  const { project, isLoading, error } = useProject(id);




// Assuming currentUser is fetched and available
// const currentUser = {userId: window.localStorage.getItem("id")}; // Fetch current user information here
// console.log(currentUser)
// Check if the current user is the owner of the project
// const isOwner = currentUser.userId === project.owner;




  if (isLoading) {
    return <IsLoading />
  }

  if (error) {
    return (<p>{error.message}</p>)
  }


  
  return (
    <div>
      <div className="container">
        <h1>{project.title}</h1>
        <img src={project.image} alt="referee generic photo" />
        <p>Campaign ID: {project.id}</p>
        <p>Project Owner ID: {project.owner}</p>
        <p>Campaign Created: {new Date(project.date_created).toLocaleDateString('en-GB')}</p>
        <p>Description: {project.description}</p>
        <p>{`Accepting Pledges: ${project.is_open}`}</p>
        <p>Pledges:</p>
        <ul>
          {project.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                {pledgeData.amount} from {pledgeData.supporter} comment: {pledgeData.comment}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Would you like to donate to this campaign?</h2>
        <CreatePledgeForm />
      </div>
    </div>
  );
}

export default ProjectPage;