import { useEffect, useState } from "react";
import OuvrageCard from "./OuvrageCard/OuvrageCard";
import './Ouvrages.css'

export default function Technology() {
  const [technology, setTechnology] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3310/technology")
      .then((response) => response.json())
      .then((data) => setOuvrage(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <div className="ouvragesContainer">
        {" "}
        {ouvrage &&
          ouvrage.map((ouvrages) => (
            <OuvrageCard
              key={ouvrages.id}
              id ={ouvrages.id}
              image={ouvrages.imageURL}
              name={ouvrages.name}
              author={ouvrages.author}
              date={ouvrages.publication_date}
            />
          ))}
      </div>
    </section>
  );
}
