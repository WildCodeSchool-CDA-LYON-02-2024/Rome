import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Technology.css";

export default function Technology() {
  const [userTechnology, setUserTechnology] = useState([]);
  const [stone, setStone] = useState([]);
  const [bronze, setBronze] = useState([]);
  const [iron, setIron] = useState([]);
  const navigate = useNavigate();

  const provinceID = 1;
  const provinceAgeID = 1;
  const ages = [
    { id: 1, name: "Âge de pierre" },
    { id: 2, name: "Âge de bronze" },
    { id: 3, name: "Âge de fer" },
  ];

  useEffect(() => {
    fetch(`http://localhost:3310/technology`)
      .then((response) => response.json())
      .then((data) => {
        setStone(data.filter((item) => item.category === 1));
        setBronze(data.filter((item) => item.category === 2));
        setIron(data.filter((item) => item.category === 3));
      })
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

  const getAgeName = (categoryId) => {
    const age = ages.find((age) => age.id === categoryId);
    return age ? age.name : "";
  };

  const handlePrev = (event) => {
    event.preventDefault();
    navigate("/province");
  };

  return (
    <div className="allTech">
      <button className="buttonX" onClick={handlePrev}>
        X
      </button>
      <div className="age">
        <div>
          <h3 className="periodTechno">{getAgeName(1)}</h3>
        </div>
        <div className="technologyContainer">
          {stone.map((tech) => (
            <div key={tech.id}>
              <div className="imageContainer">
                <img className="image" src={tech.image} alt={tech.name} />
                <p>{tech.name}</p>
                <div className="buttonContainer">
                  {userTechnology.some(
                    (userTech) => userTech.name === tech.name,
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <Link to={`/technology/${tech.id}`}>
                      <button className="rechercheTech">Rechercher</button>
                    </Link>
                  ) : (
                    <p>Veuillez développer votre province</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="age">
        <div>
          <h3 className="periodTechno">{getAgeName(2)}</h3>
        </div>
        <div className="technologyContainer">
          {bronze.map((tech) => (
            <div key={tech.id}>
              <div className="imageContainer">
                <img className="image" src={tech.image} alt={tech.name} />
                <p>{tech.name}</p>
                <div className="buttonContainer">
                  {userTechnology.some(
                    (userTech) => userTech.name === tech.name,
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <Link to={`/technology/${tech.id}`}>
                      <button className="rechercheTech">Rechercher</button>
                    </Link>
                  ) : (
                    <p>Veuillez développer votre province</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="age">
        <div>
          <h3 className="periodTechno">{getAgeName(3)}</h3>
        </div>
        <div className="technologyContainer">
          {iron.map((tech) => (
            <div key={tech.id}>
              <div className="imageContainer">
                <img className="image" src={tech.image} alt={tech.name} />
                <p>{tech.name}</p>
                <div className="buttonContainer">
                  {userTechnology.some(
                    (userTech) => userTech.name === tech.name,
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <Link to={`/technology/${tech.id}`}>
                      <button className="rechercheTech">Rechercher</button>
                    </Link>
                  ) : (
                    <p>Veuillez développer votre province</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
