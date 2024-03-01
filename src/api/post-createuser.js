async function postCreateUser(userData) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    const response = await fetch(url, {

        method: "POST",

        // telling the server what type of data we are sending
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // defineing fields and data type
            "username": userData.username,
            "first_name": userData.first_name,
            "last_name": userData.last_name,
            "email": userData.email,
            "password": userData.password,
            }),
        });

        if(!response.ok) {
            const fallbackError = `Error trying to login`;

            const data = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = data?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }
        return await response.json();
}

export default postCreateUser;