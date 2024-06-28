import { useEffect, useState } from "react";
import "./Ressource.css";

export default function Ressource() {
  const [ressource, setRessource] = useState([]);

  const provinceID = 1;

  useEffect(() => {
    fetch(`http://localhost:3310/province/${provinceID}/ressource`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setRessource(data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des ressources :", err);
      });
  }, [provinceID]);

  useEffect(() => {
    // Set interval to update quantities
    const interval = setInterval(() => {
      setRessource((prevRessource) =>
        prevRessource.map((res) => ({
          ...res,
          quantity: res.quantity + 1,
        })),
      );
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ressource.length > 0) {
      const quantitiesToUpdate = ressource.map((res) => res.quantity);
      const idsToUpdate = ressource.map((res) => res.id);

      fetch(`http://localhost:3310/province/${provinceID}/ressource`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantities: quantitiesToUpdate,
          ressourceIDs: idsToUpdate,
          provinceID,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
          } else {
            console.error(
              "Erreur lors de la mise à jour des ressources :",
              response.statusText,
            );
          }
        })
        .catch((err) => {
          console.error("Erreur lors de la mise à jour des ressources :", err);
        });
    }
  }, [ressource, provinceID]);

  return (
    <div className="ressourceGlobal">
      {ressource.map((ressources) => (
        <div className="ressourceContainer" key={ressources.id}>
          <img
            className="ressourceIcon"
            src={ressources.image}
            alt={ressources.name}
          />
          <div className="ressourceName">
            <p>{ressources.name}</p>
            <p>{ressources.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
