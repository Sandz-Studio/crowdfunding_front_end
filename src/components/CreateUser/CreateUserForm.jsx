import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Create an API request first to POST to the API create-user
import postCreateUser from "../../api/post-createuser.js";

// import css file later

function CreateUserForm() {
    // navigate to home page - hook provided by react
    const navigate = useNavigate();

    // useState hook from react to manage state of functional components
    // userData: This variable holds the current state of the user data. Initially, it's an object with empty string values for each data field.
    // setUserData: This function is used to update the userData state. When called with a new object containing updated data, it will replace the current userData with the new object, triggering a re-render of the component with the updated state.
    const [userData, setUserData] = useState({
        // empty string
        "username":"",
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
    });
    // log to see what is happening
    console.log(userData)

    // Arrow function within arrow function - Handle chnnges to form input field
    // Uses event object as a parameter, 
    const handleChange = (event) => {
        // event.target refers to the specific input element that triggered the event. By destructuring id and value from event.target, we're extracting the id and value attributes of the input element.
        const { id, value } = event.target;
        // Updating the UserData state using setUserData - accepts call back function (update is based on previous state)
        setUserData((prevUserData) => ({
            // spreads the previous state - prevUserData into a new object so existing properties od userData are retained
            ...prevUserData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.username && first_name && userData.last_name && userData.email && userData.password) {
            // using API async function
            postCreateUser(
                userData
                ).then((response) => {
                    // Check what the response is.
                    console.log("User registered successfully:", response);
                    // saving to local storage
                    window.localStorage.setItem("token", response.token);
                    // nagivate to home page 
                    navigate("/");
                })
                // CHANGE this to new error msg as this is for log in
            //     .catch((err) => {
            //         window.alert(err.message);
            // });
        }
    };

    return (
        <form>
            <div>
                <label>Username:</label>
                <input type="text" id="username" placeholder="Enter username" onChange={handleChange} />
            </div>
            <div>
                <label>First name:</label>
                <input type="text" id="first_name" placeholder="Enter first name" onChange={handleChange} />
            </div>
            <div>
                <label>Last name:</label>
                <input type="text" id="last_name" placeholder="Enter last name" onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" id="email" placeholder="Enter email address" onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}>Create Account</button>
        </form>
    );
            


    // return (
        // <form>
        //     <div>
        //         <label htmlFor="username">Username:</label>
        //         <input type="text" id="username" placeholder="Enter username" />
        //     </div>
        //     <div>
        //         <label htmlFor="password">Password:</label>
        //         <input type="password" id="password" placeholder="Password" />
        //     </div>
        //     <button type="submit">Login</button>
        // </form>
    // );
}

export default CreateUserForm;