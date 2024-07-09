import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTechnology } from "./TechnologyContext";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Technology.css";

export default function Technology() {
  const [userTechnology, setUserTechnology] = useState([]);
  const { userByIDTechnology } = useTechnology();
  const [stone, setStone] = useState([]);
  const [bronze, setBronze] = useState([]);
  const [iron, setIron] = useState([]);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const provinceID = 1;
  const provinceAgeID = 1; // Assuming this is the age level of the current province

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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); //

  const getAgeName = (categoryId) => {
    const age = ages.find((age) => age.id === categoryId);
    return age ? age.name : "";
  };

  const handlePrev = (event) => {
    event.preventDefault();
    navigate("/province");
  };

  const getProgress = (tech) => {
    const techProgress = userByIDTechnology.find((t) => t.id === tech.id);

    if (techProgress) {
      if (progress >= tech.construction_time) {
        location.reload();
        return 100;
      }
      const constructionTime = tech.construction_time;
      const progressPercentage = Math.ceil((100 / constructionTime) * progress);
      return progressPercentage;
    }

    return 0;
  };

  const TechnologySection = ({ technologies, ageId }) => (
    <div className="age">
      <div>
        <h3 className="periodTechno">{getAgeName(ageId)}</h3>
      </div>
      <div className="technologyContainer">
        {technologies.map((tech) => (
          <div key={tech.id} className="technologyCard">
            <div className="imageContainer">
              <img className="image" src={tech.image} alt={tech.name} />
              <p>{tech.name}</p>
              <div className="buttonContainer">
                {userTechnology.some(
                  (userTech) => userTech.name === tech.name
                ) ? (
                  userByIDTechnology.some(
                    (techById) => techById.id === tech.id
                  ) ? (
                    <div className="progressContainer">
                      <ProgressBar
                        completed={getProgress(tech)}
                        className="progress-bar"
                        labelClassName="label"
                      width="5rem"
                      />
                      <p className="progressText">
                        {Math.round(getProgress(tech))}%
                      </p>
                    </div>
                  ) : (
                    <p className="techAcquise">Déjà acquis</p>
                  )
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
  );

  return (
    <div className="allTech">
      <button className="buttonX" onClick={handlePrev}>
        X
      </button>
      <TechnologySection technologies={stone} ageId={1} />
      <TechnologySection technologies={bronze} ageId={2} />
      <TechnologySection technologies={iron} ageId={3} />
    </div>
  );
}
