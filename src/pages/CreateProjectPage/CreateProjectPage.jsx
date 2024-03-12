import CreateProjectForm from "../../components/CreateProject/CreateProjectForm";

import './CreateProjectPage.css';

function CreateProject() {
    return (
    <div className="create-project-page">
        <div className="project-container">
            <h1>Create a fundraising campaign.</h1>
            <CreateProjectForm />
        </div>
    </div>
    )
}

export default CreateProject;