async function postLogin(username, password) {
  const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
  const response = await fetch(url, {
  
  method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({
      "username": username,
      "password": password,
      }),
  });

  if (!response.ok) {
      const fallbackError = `Error trying to login`;

      const data = await response.json().catch(() => {
          throw new Error(fallbackError);
      });

    //   Another way to do this?
    //   const message = Object.values(data)
    //         .join('\n');
    //     alert('Error trying to login:\n' + message);
    //     throw new Error(message);

      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
  }
  console.log(response)

  return await response.json();
  
}

export default postLogin;