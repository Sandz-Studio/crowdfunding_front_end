import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Create an API request first to POST to the API create-user
import postCreateProject from "../../api/post-createproject.js";

import "./CreateProjectForm.css";

function CreateProjectForm() {
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState({
        title: '',
        description:'',
        goal: null,
        image: '',
        // default value is set to true
        is_open: true,
        date_created: new Date().toISOString(),
    });
    // console to see what is happening here
    // console.log(projectData)

    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        
         // Check if the input is a checkbox
         const newValue = type === 'checkbox' ? checked : value;

        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: newValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (projectData.title && projectData.description && projectData.goal && projectData.image && projectData.is_open && projectData.date_created) {
            // using API async function
            postCreateProject(projectData)
                .then((response) => {
                    // Check what the response is.
                    console.log("Project created successfully:", response);

                    const projectId = response.id;

                    // nagivate to home page 
                    navigate(`/project/${projectId}`);
                })
                .catch((err) => {
                    console.error("Error creating project:", err);
                    // Handle error, e.g., show error message to the user
                });
        }
    };
    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="Enter project title" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" placeholder="Describe your project" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="goal">Fundraising Goal:</label>
                <input type="number" id="goal" placeholder="Enter project goal as a whole number" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" placeholder="Enter project image URL" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="is_open">Currently asking for donations? </label>
                <input type="checkbox" id="is_open" checked={projectData.is_open} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="date_created">Date Created</label>
                <input type="date" id="date_created" onChange={handleChange} />
            </div>
            <button type="submit">Create Campaign</button>
        </form>
    );
}

export default CreateProjectForm;