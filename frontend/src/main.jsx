import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyById from "./components/Technology/TechnologyById";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Shouldn't this be /province/:id ?
        element: <Home />,
      },
      {
        path: "/buildings",
        element: <Buildings />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
      {
        path: "/technology/:id",
        element: <TechnologyById />,
      },
      {
        path:"/user/login",
        element:<Login/>,
      },
      {
        path:"/user/register",
        element:<Register/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
