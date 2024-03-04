import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledgeForm from "../components/CreatePledge/CreatePledgeForm.jsx";

import "./ProjectPage.css";
// import "../components/CreatePledge/CreatePledgeForm.css";

function ProjectPage() {
  // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  // useProject returns three pieces of info, so we need to grab them all here
  const { project, isLoading, error } = useProject(id);

  if (isLoading) {
    return (<p>loading...</p>)
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
                {pledgeData.amount} from {pledgeData.supporter}
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