import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./GenericCard.css";

export default function GenericCard({
  id,
  title,
  image,
  name,
  description,
  time,
  resourceImages,
  costs,
  handleButton,
}) {
  const navigate = useNavigate();

  const handlePrev = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <section className="globalContainer">
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
            <p className="time">{time}</p>
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
            <div className="costsContainer">
              {costs.map((cost, index) => (
                <p className="cost" key={index}>
                  {cost}
                </p>
              ))}
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
