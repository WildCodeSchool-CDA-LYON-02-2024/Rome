import { useEffect, useState } from "react";
import "./Ressource.css";

export default function Ressource() {
  const [ressource, setRessource] = useState([]);

  const provinceID = 1;

  useEffect(() => {
    fetch(`http://localhost:3310/province/${provinceID}/ressource`)
      .then((response) => response.json())
      .then((data) => {
        setRessource(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="ressourceGlobal">
      {ressource.map((ressources) => (
        <div className="ressourceContainer" key={ressources.id}>
          <img className="ressourceIcon" src={ressources.image} alt="" />
          <div className="ressourceName">
            <p>
              {""}
              {ressources.name}
            </p>
            <p>
              {ressources.quantity} {""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
