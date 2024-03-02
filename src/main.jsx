import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import AllProjectsPage from "./pages/AllProjectsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateUserPage from "./pages/CreateUserPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import App from "./app.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,
    children: [
      { path: "*", element: <NotFound /> },
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/createaccount", element: <CreateUserPage /> },
      { path: "/projects", element: <AllProjectsPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        {/* Here we wrap our app in the router provider so they render */}
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);