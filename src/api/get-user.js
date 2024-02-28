/* We use kebab-case her because it is common convention to use it for 
files that contain functions that are not react components */

// This is an Asynchronous function - 
// the work this function does does not need to be synced up in time

// Define a function to fetch user progile data based on the provided user ID from API database.

async function getUser(userId) {
    // URL for request using the Vite environment variable and API endpoint
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;

    // Fetch function - pass in URL and GET method(HTTP req method). 
    // Fetch returns a "PROMISE"
    const response = await fetch(url, { method: "GET" });


    // use 'ok' property to check response is successful, if it's not then it throws an error.
    if (!response.ok) {
        const fallbackError = `Error fetching user with id ${userId}`;

        // await keyword means this code will not run until 'response' gets turned into JSON
        const data = await response.json() .catch(() => {
            // If response is not JSON then we throw a generic error
            // 'catch' will trigger if we try and fail to turn respose into JSON
            throw new Error(fallbackError);
        });

        // if respose IS JSON then we include the JSON in the error we throw
        // usually the server will send the error messgae in the 'detail' property
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    // if the request is successful then we return the data from the resonse
    // It takes time to turn the response into JSON so we use the 'await' keyword again.
    return await response.json();
}

export default getUser;

// THINGS TO REMEMBER
// async functions always return a promise
// await can only be used inside an asyn function
// await will wait for the promise to resolve and then return the value
// If the promise rejects then the await will throw and error.