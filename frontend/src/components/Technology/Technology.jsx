import { useEffect, useState } from "react";
import { useTechnology } from "../../context/TechnologyContext";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Technology.css";
import ButtonSound from "../Sound/ButtonSound";

export default function Technology() {
  const [userTechnology, setUserTechnology] = useState([]);
  const { userByIDTechnology } = useTechnology();
  const [stone, setStone] = useState([]);
  const [bronze, setBronze] = useState([]);
  const [iron, setIron] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false); // State for notification;

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

  // useEffect(() => {
  //   // Display the notification when component mounts
  //   setShowNotification(true);

  //   // Hide the notification after a delay (optional)
  //   const notificationTimeout = setTimeout(() => {
  //     setShowNotification(false);
  //   }, 3000); // Adjust the delay as needed

  //   // Clean up timeout to avoid memory leaks
  //   return () => clearTimeout(notificationTimeout);
  // }, []);

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

  const getProgress = (tech) => {
    const techProgress = userByIDTechnology.find((t) => t.id === tech.id);

    if (techProgress) {
      if (progress >= tech.construction_time) {
        
        setShowNotification(true);
        const notificationTimeout = setTimeout(() => {
          setShowNotification(false);
        }, 3000); 
        //location.reload();
        return 100 &&  clearTimeout(notificationTimeout);
      }
      const constructionTime = tech.construction_time;
      const progressPercentage = Math.ceil((100 / constructionTime) * progress);
      return progressPercentage;
    }

    return 0;
  };

  const TechnologySection = ({ technologies, ageId }) => {
    const isBlurred = ageId > provinceAgeID;

    return (
      <div className={`age ${isBlurred ? "blurred" : ""}`}>
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
                  ) : (
                    <ButtonSound
                      text="Rechercher"
                      className="rechercheTech"
                      navigateTo={`/technology/${tech.id}`}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="allTech">
      {showNotification && <div className="notification">⚔️Recherche terminée</div>}

      <ButtonSound text="X" className="buttonX" navigateTo={"/province"} />
      <TechnologySection technologies={stone} ageId={1} />
      <TechnologySection technologies={bronze} ageId={2} />
      <TechnologySection technologies={iron} ageId={3} />
    </div>
  );
}
