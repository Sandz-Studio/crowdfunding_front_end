async function putUpdateProject(projectId, projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token = window.localStorage.getItem("token");

    const response = await fetch(url, {
    method: "PUT",
    // defines the headers for the request
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
 
        ...projectData,

    }),

});
    if (!response.ok) {
        const fallbackError = `Error trying to update project.`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}

export default putUpdateProject;