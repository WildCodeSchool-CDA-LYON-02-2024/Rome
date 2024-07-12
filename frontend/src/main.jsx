import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TechnologyProvider } from "./context/TechnologyContext.jsx";
import App from "./App.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyById from "./components/Technology/TechnologyById";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Test from "./components/Test.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginMusic from "./components/Sound/loginMusic.jsx";
import GeneralMusic from "./components/Sound/GeneralMusic.jsx";
import InhabitantsByRoleId from "./pages/InhabitantsByRoleId.jsx";


const MainRouter = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/user/login" ||
    location.pathname === "/user/register";
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isAuthPage && <LoginMusic />}
      {!isAuthPage && !isHomePage && <GeneralMusic />}
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/province' element={<HomePage />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/technology/:id' element={<TechnologyById />} />
          <Route path='/inhabitant/:role_id' element={<InhabitantsByRoleId />} />
          <Route
            path='/users/:user_id/provinces/:province_id/inhabitants'
            element={<Test />}
          />
        </Route>
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TechnologyProvider>
        <Router>
          <MainRouter />
        </Router>
      </TechnologyProvider>
    </AuthProvider>
  </React.StrictMode>
);
