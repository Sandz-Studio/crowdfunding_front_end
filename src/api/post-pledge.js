
async function postPledge(pledgeData) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = window.localStorage.getItem("token");
    // const { id } = useParams();

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
            ...pledgeData,
        // "amount": pledge.amount,
        // "comment": pledge.comment,
        // "anonymous": pledge.anonymous,
        // "project": pledge.project,
        }),
    });

    if (!response.ok) {
        // error msg if response doesn't contain a specific error msg
        const fallbackError = `Error trying to make a pledge.`;
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

export default postPledge;