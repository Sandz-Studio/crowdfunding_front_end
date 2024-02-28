import { createContext, useState } from "react";

// Here we create the Context
export const AuthContext = createContext();
// Here we create the component that will wrap our app, this means all it children can access the context using are hook.
export const AuthProvider = (props) => {
    // Using a object for the state here, this way we can add more properties to the state later on like user id.
    const [auth, setAuth] = useState({
        // Here we initialize the context with the token from local storage, this way if the user refreshes the page we can still have the token in memory.
        token: window.localStorage.getItem("token"),
        userId: window.localStorage.getItem("id"),
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
};

/* if you want to access the authentication state (auth object) 
and the function to update it (setAuth) in your components, 
you can use the useContext hook provided by React to consume the context.*/