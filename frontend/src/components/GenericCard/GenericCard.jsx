import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./GenericCard.css";
import button2 from "/sons/button2.mp3";

export default function GenericCard({
  id,
  title,
  image,
  name,
  description,
  resourceImages,
  costs,
  handleButton,
}) {
  const navigate = useNavigate();
  const audioRef1 = useRef(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("/technology");
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]);

  const handlePrev = (event) => {
    event.preventDefault();
    if (audioRef1.current) {
      audioRef1.current.play();
    }
    setRedirect(true);
  };

  return (
    <section className="globalContainer">
      <audio ref={audioRef1} src={button2} />
      <h2>{title}</h2>
      <div className="container">
        <button className="buttonX" onClick={handlePrev}>
          X
        </button>
        <div className="topContainer">
          <div className="imageContainer">
            <img src={image} alt={name} className="image" />
          </div>
          <div className="informationContainer">
            <p className="description">{description}</p>
            <div className="costsContainer">
              {costs.map((cost, index) => (
                <p className="cost" key={index}>
                  {cost}
                </p>
              ))}
            </div>
            <div className="resourceImagesContainer">
              <div className="imageGallery">
                {resourceImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Ressource ${index + 1}`}
                    className="resourceImage"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="button" onClick={handleButton}>
            Lancer la recherche
          </button>
        </div>
      </div>
    </section>
  );
}

GenericCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
