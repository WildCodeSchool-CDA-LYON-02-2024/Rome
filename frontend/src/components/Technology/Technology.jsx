import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Technology.css";
import button2 from "/sons/button2.mp3";

export default function Technology() {
  const [userTechnology, setUserTechnology] = useState([]);
  const [stone, setStone] = useState([]);
  const [bronze, setBronze] = useState([]);
  const [iron, setIron] = useState([]);
  const audioRef = useRef(null);
  const [redirectTech, setRedirectTech] = useState(null);
  const [prev, setPrev] = useState(null);
  const navigate = useNavigate();

  const provinceID = 1;
  const provinceAgeID = 1;
  const ages = [
    { id: 1, name: "Âge de pierre" },
    { id: 2, name: "Âge de bronze" },
    { id: 3, name: "Âge de fer" },
  ];

  useEffect(() => {
    if (redirectTech) {
      const timer = setTimeout(() => {
        navigate(`/technology/${redirectTech.id}`);
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirectTech, navigate]);

  useEffect(() => {
    if (prev) {
      const timer = setTimeout(() => {
        navigate("/province");
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [prev, navigate]);

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
      .then((data) => {
        setUserTechnology(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [provinceID]);

  const getAgeName = (categoryId) => {
    const age = ages.find((age) => age.id === categoryId);
    return age ? age.name : "";
  };

  const handlePlaySoundAndRedirect = (tech) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setRedirectTech(tech);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (audioRef.current) {
      audioRef.current.play();
    }
    setPrev(true);
  };

  return (
    <div className="allTech">
      <button className="buttonX" onClick={handlePrev}>
        X
      </button>
      <audio ref={audioRef} src={button2} />
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
                    (userTech) => userTech.name === tech.name
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <button
                      onClick={() => handlePlaySoundAndRedirect(tech)}
                      className="rechercheTech"
                    >
                      Rechercher
                    </button>
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
                    (userTech) => userTech.name === tech.name
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <button
                      onClick={() => handlePlaySoundAndRedirect(tech)}
                      className="rechercheTech"
                    >
                      Rechercher
                    </button>
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
                    (userTech) => userTech.name === tech.name
                  ) ? (
                    <p className="techAcquise">Déjà acquis</p>
                  ) : provinceAgeID >= tech.category ? (
                    <button
                      onClick={() => handlePlaySoundAndRedirect(tech)}
                      className="rechercheTech"
                    >
                      Rechercher
                    </button>
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
