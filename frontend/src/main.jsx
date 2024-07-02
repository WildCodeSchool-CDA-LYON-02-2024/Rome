import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyById from "./components/Technology/TechnologyById";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Test from './components/Test.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';




function main(isLoggedIn) {
  
  

  


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/province',
      element: <App />,
    },
    // {
    //   path: '/province',
    //   element: isLoggedIn ?  <App /> : <Login />,
    // },
    {
      path: '/buildings',
      element: <Buildings />,
    },
    // {
    //   path: '/buildings',
    //   element: isLoggedIn ? <Buildings /> : <Login />,
    // },
    {
      path: '/technology',
      element: <TechnologyPage />,
    },
    // {
    //   path: '/technology',
    //   element: isLoggedIn ? <TechnologyPage /> : <Login />,
    // },
    {
      path: '/technology/:id',
      element: <TechnologyById />,
    },
    // {
    //   path: '/technology/:id',
    //   element: isLoggedIn ? <TechnologyById /> : <Login />,
    // },
    {
      path: '/user/login',
      element: <Login />,
    },
    // {
    //   path: '/user/login',
    //   element: <Login />,
    // },
    {
      path: '/user/register',
      element: <Register />,
    },
    {
      path: '/users/:user_id/provinces/:province_id/inhabitants',
      element: <Test />,
    },
    // {
    //   path: '/users/:user_id/provinces/:province_id/inhabitants',
    //   element: isLoggedIn ? <Test /> : <Login />,
    // },
  
  ]);

  return router;
}
  
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={main()}  />
    </AuthProvider>
  </React.StrictMode>
);
 


export default main

  



