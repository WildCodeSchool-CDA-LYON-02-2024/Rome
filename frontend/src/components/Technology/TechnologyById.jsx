import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";

export default function TechnologyById() {
  const [technology, setTechnology] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const technologyID = parseInt(id);
  const provinceID = 1;

  console.log(technologyID);
  console.log(provinceID);
  console.log(technology);

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
      <div className="ouvragesContainer">
        {" "}
        {technology &&
          technology.map((technologies) => (
            <div key={technologies.id}>
              <p>{technologies.name}</p>
              <p>{technologies.description}</p>
              <img src={technologies.image} alt={technologies.name} />
              <button onClick={handleAdd}>Lancer la recherche</button>
            </div>
          ))}
      </div>
    </section>
  );
}
