import { useEffect, useState } from "react";

export default function TechnologyById() {
  const [technology, setTechnology] = useState(null);
  const { id: id } = useParams();
  console.log(id);
 
  useEffect(() => {
    fetch(`http://localhost:3310/technology/${id}`)
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
            </div>
          ))}
      </div>
    </section>
  );
}