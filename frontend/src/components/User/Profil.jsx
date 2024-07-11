import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import "./Profil.css";

export default function Profil() {
  const [profil, setProfil] = useState([]);
  const { authUser } = useAuth();

  console.log(authUser, "auth dans profil");

  const userID = authUser.id;
  useEffect(() => {
    fetch(`http://localhost:3310/user/${userID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setProfil(data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des données :", err);
      });
  }, []);

  return (
    <div className="userContainer">
      {profil.map((information) => (
        <div className="userInformation" key={information.id}>
          <img className="userIcon" src={information.image} alt="" />
          <p className="username">{information.username}</p>
        </div>
      ))}
    </div>
  );
}
