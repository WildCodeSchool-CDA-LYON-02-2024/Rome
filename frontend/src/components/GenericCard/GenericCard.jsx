import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./GenericCard.css";

export default function GenericCard({
  id,
  title,
  image,
  name,
  description,
  handleButton,
}) {
  const navigate = useNavigate();

  const handlePrev = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <section className="globalContainer">
      <div className="buttonXContainer">
        <button className="buttonX" onClick={handlePrev}>
          X
        </button>
      </div>
      <h2>{title}</h2>
      <div className="container">
        <div className="imageContainer">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="informationContainer">
          <p className="description">{description}</p>
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
