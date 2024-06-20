import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Technology() {
  const [technology, setTechnology] = useState(null);
  const provinceID = 1;

  useEffect(() => {
    fetch(`http://localhost:3310/province/${provinceID}/technology`)
      .then((response) => response.json())
      .then((data) => setTechnology(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <div className="ouvragesContainer">
        {" "}
        {technology &&
          technology.map((technologies) => (
            <div key={technologies.id}>
              <p>{technologies.name}</p>
              <img src={technologies.image} alt={technologies.name} />
              <Link to={`/technology/${technologies.id}`}>
                <button>Rechercher</button>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
