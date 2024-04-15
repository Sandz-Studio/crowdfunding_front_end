import { useState, useEffect } from "react";
import getUser from "../api/get-user";

export default function useUser(userId) {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // pass userId to the getUser function
        getUser(userId)
        .then((user) => {
            setUser(user);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });

    // Now we need to pass the userId to the dependency array so that the hook will re-run if the userId changes.
    }, [userId]);

    return { user, isLoading, error };
}

