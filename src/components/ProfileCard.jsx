// import react library's 'useContext' hook - used for consuming context within functional components
import { useContext } from "react";
// useUser - custom hook I made to handle state when requesting user data
import useUser from "../hooks/use-user.js";
// imports AuthContext from Authprovider - the curley brackets and space is used when importing a named export?
import { AuthContext } from "./AuthProvider.jsx";
import IsLoading from "../components/IsLoading/IsLoading";


function ProfileCard() {
    const { auth } = useContext(AuthContext); 
    const userId =  auth.userId;

    // UseUser returns 3 things so we need to grab them all
    const { user, isLoading, error } = useUser(userId);

    if (!userId) {
        return null
    }

    if (isLoading) {
        return <IsLoading />
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div>
            {/* Display user profile data */}
            <h2>User Profile</h2>
            <p>Name: {user.first_name}</p>
            <p>Email: {user.email}</p>
            <p>Date Joined: {user.date_joined}</p>
            {/* Map through projects by this user later */}
        </div>
    );
}

export default ProfileCard;
