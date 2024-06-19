import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Technology() {
  const [technology, setTechnology] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3310/technology")
      .then((response) => response.json())
      .then((data) => console.log(data))
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
            <div>
              <p>{technologies.name}</p>
              <p>{technologies.description}</p>
              <img src={technologies.image} alt="" />
              <Link to={`/technology/${technologies.id}`}>
                <button>Acheter</button>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}