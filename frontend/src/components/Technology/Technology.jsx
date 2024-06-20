import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Technology.css";

export default function Technology() {
  const [userTechnology, setUserTechnology] = useState([]);
  const [technology, setTechnology] = useState([]);
  const provinceID = 1;

  useEffect(() => {
    fetch(`http://localhost:3310/technology`)
      .then((response) => response.json())
      .then((data) => setTechnology(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3310/province/${provinceID}/technology`)
      .then((response) => response.json())
      .then((data) => setUserTechnology(data))
      .catch((err) => {
        console.error(err);
      });
  }, [provinceID]);

  return (
    <section>
      <div className="allTech">
        {technology.map((tech) => (
          <div key={tech.id} className="technologyContainer">
            <div className="imageContainer">
              <img className="image" src={tech.image} alt={tech.name} />
              <p>{tech.name}</p>
              <div className="buttonContainer">
                {userTechnology.some(
                  (userTech) => userTech.name === tech.name
                ) ? (
                  <p className="techAcquise">Déjà acquis</p>
                ) : (
                  <Link to={`/technology/${tech.id}`}>
                    <button className="rechercheTech">Rechercher</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
