// TechnologyById.js
import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenericCard from "../GenericCard/GenericCard";
import Ressource from "../Ressource/Ressource";
import { useTechnology } from "../../context/TechnologyContext";
import button from "/sound/button2.mp3";

export default function TechnologyById() {
  const [technology, setTechnology] = useState(null);
  const [ressource, setRessource] = useState([]);
  const { addTechnology } = useTechnology();
  const { authUser } = useAuth();
  const [showNotification, setShowNotification] = useState(false); // State for notification

  const audioRef = useRef(null);
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  const technologyID = parseInt(id);
  // const provinceID = 1;
   const provinceID = authUser.province_id;
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("/technology");
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]);

  useEffect(() => {
    fetch(`http://localhost:3310/technology/${technologyID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setTechnology(data);
        }
      })
      .catch((err) => {
        console.error(
          "Erreur lors de la récupération des données de technologie :",
          err
        );
      });

    fetch(`http://localhost:3310/province/${provinceID}/ressource`)
      .then((response) => response.json())
      .then((data) => {
        setRessource(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [technologyID, provinceID]);

  const handleAdd = (event) => {
    event.preventDefault();

    // Show notification
    setShowNotification(true);

    fetch(`http://localhost:3310/technology/${technologyID}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinceID }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.info("La recherche de la technologie a été lancée avec succès.");
          addTechnology(technology[0]); // Ajouter la technologie au contexte

          // Delay navigation by 3 seconds
          setTimeout(() => {
            setShowNotification(false);
            setRedirect(true);
          }, 3000); // 3000 milliseconds = 3 seconds
        }
      })
      .catch((err) => {
        console.error("Erreur lors du lancement de la recherche :", err);
      });
  };

  return (
    <section>
          <audio ref={audioRef} src={button} />
      <div>
        <Ressource />
        {technology && (
          <GenericCard
            title={`Création de la technologie : ${technology[0].name}`}
            id={technology[0].id}
            image={technology[0].image}
            name={technology[0].name}
            description={technology[0].description}
            costs={technology.map((ressource) => ressource.ressource_cost)}
            resourceImages={technology.map(
              (ressource) => ressource.ressource_image
            )}
            technologyID={technologyID}
            handleButton={handleAdd}
          />
        )}
    
      </div>
      {showNotification && <div className="notification">⚔️ Recherche lancée avec succès</div>}
    </section>
  );
}
