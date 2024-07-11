import { useEffect, useState } from "react";
import "./Profil.css";

export default function Profil() {
  const [profil, setProfil] = useState([]);
  const userID = 7;
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

  let images = profil.image;

  return (
    <div className="userContainer">
      {profil.map((information) => (
        <div className="userInformation">
          <img className="userIcon" src={information.image} alt="" />
          <p key={information.id}>{information.username}</p>
        </div>
      ))}
    </div>
  );
}
