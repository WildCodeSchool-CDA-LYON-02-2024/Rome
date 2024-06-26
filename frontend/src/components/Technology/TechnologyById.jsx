import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenericCard from "../GenericCard/GenericCard";

export default function TechnologyById() {
  const [technology, setTechnology] = useState(null);
  const { id } = useParams();
  const technologyID = parseInt(id);
  const provinceID = 1;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3310/technology/${technologyID}`)
      .then((response) => response.json())
      .then((data) => setTechnology(data))
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
          console.info("La recherche de la technologie a été lancée avec succès.");
          navigate("/technology");
        }
      })
      .catch((err) => {
        console.error("Erreur lors du lancement de la recherche :", err);
      });
  };

  return (
    <section>
      <div>
        {technology && (
          <GenericCard
            title={`Création de la technologie : ${technology[0].name}`}
            id={technology[0].id}
            image={technology[0].image}
            name={technology[0].name}
            description={technology[0].description}
            costs={technology.map((ressource) => ressource.ressource_cost)}
            resourceImages={technology.map((ressource) => ressource.ressource_image)}
            technologyID={technologyID}
            handleButton={handleAdd}
          />
        )}
      </div>
    </section>
  );
}
