import PropTypes from "prop-types";
import "./GenericCard.css";

export default function GenericCard({ id, title, image, name, description }) {
  const technologyID = parseInt(id);
  const provinceID = 1;
  //   const { userData } = useUserContext();

  //   const role = userData && userData.user ? userData.user.role : null;
  const handleAdd = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3310/technology/${technologyID}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinceID }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.info("technology research launched successfully.");
          navigate("/technology");
        }
      })
      .catch((err) => {
        console.error("Error launching reseach :", err);
      });
  };

  return (
    <section className="globalContainer">
      <h2>{title}</h2>
      <div className="container">
        <div className="imageContainer">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="informationContainer">
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={handleAdd}>Lancer la recherche</button>
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
