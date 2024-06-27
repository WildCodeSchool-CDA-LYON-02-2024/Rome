import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          setError("Email ou mot de passe incorrect");
          navigate("/login");
        }
      })
      .then((data) => {
        console.log(data);

        navigate("/province");
      })
      .catch(() => {
        console.error(error);
      });
  };
  return (
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
  );
}
