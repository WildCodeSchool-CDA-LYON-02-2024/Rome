import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider.jsx';
import { jwtDecode} from 'jwt-decode'

import "./Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn, setAuthUser, setToken } = useAuth();

  const navigate = useNavigate();

  // Gestionnaire de changement de l'email

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3310/user/login`, {
      method: "post",
      credentials: "include",
      headers: { "Content-Type": "application/json", "Authorization" :"Bearer {user.token}" },
     
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
         
          setIsLoggedIn(true);
          return response.json();
        } else {
          setError("Email ou mot de passe incorrect");
          navigate("/login");
        }
      })
      .then((data) => {
         const token = data.token;
        setToken(token);
        const decodedToken = jwtDecode(token);
        setAuthUser({
          id: decodedToken.id,
          username: decodedToken.username,
          province_id:decodedToken.province
          
        })

     
        navigate("/province");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="generalContainer-wrapper">
    <section className="generalContainer">
      <h2>Connectez-vous</h2>
      <div className="loginContainer">
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleMailChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button onClick={handleSubmit}>se connecter</button>
        <div>
          Vous n'avez pas encore de compte ?{" "}
          <span>
            <Link to="/user/register">Enregistrez-vous</Link>
          </span>
        </div>
      </div>
      </section>
      </div>
  );
}
