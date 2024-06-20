import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="ouvragesContainer">
        {technology.map((tech) => (
          <div key={tech.id}>
            <p>{tech.name}</p>
            <img src={tech.image} alt={tech.name} />
            {userTechnology.some(userTech => userTech.name === tech.name) ? (
              <p>okay</p>
            ) : (
              <Link to={`/technology/${tech.id}`}>
                <button>Rechercher</button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
