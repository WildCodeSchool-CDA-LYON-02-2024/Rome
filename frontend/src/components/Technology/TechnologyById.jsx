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
  }, []);

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
          console.info("technology research launched successfully.");
          navigate("/technology");
        }
      })
      .catch((err) => {
        console.error("Error launching reseach :", err);
      });
  };

  return (
    <section>
      <div>
        {technology &&
          technology.map((technologies) => (
            <GenericCard
              key={technologies.id}
              title={`Création de la technologie : ${technologies.name}`}
              id={technologies.id}
              image={technologies.image}
              name={technologies.name}
              description={technologies.description}
              technologyID={technologyID}
              handleButton={handleAdd}
            />
          ))}
      </div>
    </section>
  );
}
