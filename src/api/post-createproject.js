async function postCreateProject(projectData) {
    // the url for API endpoint
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    // retrieves the auth token from browser local storage to auth post requests to the api
    const token = window.localStorage.getItem("token");
    // fetch request is async operation - await is used to wait for response from the server.
    const response = await fetch(url, {
    // HTTP method
    method: "POST",
    // defines the headers for the request
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
    },
    // constructs request body by serialising the project object into JSON string
    body: JSON.stringify({
        // using the spread operator is the same as defining each field. It copies all the properties of 
        ...projectData,
        // "title": project.title,
        // "description": project.description,
        // "goal": project.goal,
        // "image": 
        // "is_open": true,
        // "date_created": 
    }),

});
    // checking for response status not in the range 200-299 which indicates a server error
    if (!response.ok) {
        // error msg if response doesn't contain a specific error msg
        const fallbackError = `Error trying to create project.`;
        // async operation that waits for JSON - is error during JSON parsing throws custom error
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        // This line extracts the error message from the response body if it exists. If the error message is not found, it falls back to the fallbackError defined earlier.
        const errorMessage = data?.detail ?? fallbackError;
        // throws an error with the extracted error message, indicating a failure in creating the project.
        throw new Error(errorMessage);
    }
    // successful creation of project
    return await response.json();


}

// make the fucntion available for import
export default postCreateProject;