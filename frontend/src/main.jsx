import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyById from "./components/Technology/TechnologyById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
      {
        path: "/technology/:id",
        element: <TechnologyById />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
