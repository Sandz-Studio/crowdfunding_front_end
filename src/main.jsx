import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

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
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
      { path: "/contact", element: <ContactPage /> },
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