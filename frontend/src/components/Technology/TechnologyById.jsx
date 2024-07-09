// TechnologyById.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenericCard from "../GenericCard/GenericCard";
import Ressource from "../Ressource/Ressource";
import { useTechnology } from "./TechnologyContext";

export default function TechnologyById() {
  const [technology, setTechnology] = useState(null);
  const [ressource, setRessource] = useState([]);
  const { addTechnology, setProgress } = useTechnology();

  const { id } = useParams();
  const technologyID = parseInt(id);
  const provinceID = 1;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3310/technology/${technologyID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setTechnology(data);
        }
      })
      .catch((err) => {
        console.error(
          "Erreur lors de la récupération des données de technologie :",
          err
        );
      });

    fetch(`http://localhost:3310/province/${provinceID}/ressource`)
      .then((response) => response.json())
      .then((data) => {
        setRessource(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [technologyID]);

  const handleAdd = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3310/technology/${technologyID}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinceID }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.info(
            "La recherche de la technologie a été lancée avec succès."
          );
          addTechnology(technology[0]); // Ajouter la technologie au contexte
          navigate("/technology");
        }
      })
      .catch((err) => {
        console.error("Erreur lors du lancement de la recherche :", err);
      });

    const updatedQuantities = ressource.map((resourceItem) => {
      const technologyItem = technology.find(
        (techItem) => techItem.ressource_id === resourceItem.id
      );
      if (technologyItem) {
        return {
          id: resourceItem.id,
          quantity: resourceItem.quantity - technologyItem.ressource_cost,
        };
      }
      return resourceItem;
    });

    const quantitiesToUpdate = updatedQuantities.map((item) => item.quantity);
    const idsToUpdate = updatedQuantities.map((item) => item.id);

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
          console.info("Les ressources sont suffisantes.");
        } else {
          console.error(
            "Erreur lors de la mise à jour des ressources :",
            response.statusText
          );
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour des ressources :", err);
      });
  };

  return (
    <section>
      <div>
        <Ressource />
        {technology && (
          <GenericCard
            title={`Création de la technologie : ${technology[0].name}`}
            id={technology[0].id}
            image={technology[0].image}
            name={technology[0].name}
            description={technology[0].description}
            costs={technology.map((ressource) => ressource.ressource_cost)}
            resourceImages={technology.map(
              (ressource) => ressource.ressource_image
            )}
            technologyID={technologyID}
            handleButton={handleAdd}
          />
        )}
      </div>
    </section>
  );
}
