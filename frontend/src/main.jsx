import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TechnologyProvider } from "./components/Technology/TechnologyContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyById from "./components/Technology/TechnologyById";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Test from "./components/Test.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/province",
    element: <HomePage />,
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
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
  {
    path: "/users/:user_id/provinces/:province_id/inhabitants",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TechnologyProvider>
        <RouterProvider router={router} />
      </TechnologyProvider>
    </AuthProvider>
  </React.StrictMode>
);

