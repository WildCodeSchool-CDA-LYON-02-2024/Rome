import PropTypes from "prop-types";
import "./GenericCard.css";
import ButtonSound from "../Sound/ButtonSound";

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

  return (
    <section className="globalContainer">
      <h2>{title}</h2>
      <div className="container">
        <ButtonSound text="X" className="buttonX" navigateTo={-1} />
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
