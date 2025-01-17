import React, { useState } from "react";
import building from "../services/buildings";
import Button from "../components/Button";
import ButtonSound from "../components/Sound/ButtonSound";

import Test from "../components/Test";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

function Map2({ handleClick }) {
  const [clickedButton, setClickedButton] = useState(null);
  const navigate = useNavigate();
  const { setToken, setIsLoggedIn } = useAuth();

  const buildings = building.batiments;
  const buildingsToDisplay = buildings.filter(
    (building) => building.state === "enable"
  );

  function handleClick(button) {
    setClickedButton(button);
    switch (button) {
      case "logout":
        setToken("");
        setIsLoggedIn(false);
        sessionStorage.removeItem("authUser");
        navigate("/user/login");
        break;
      default:
        return navigate("/province");
    }
  }
  function handleClickedMenu(building) {
    alert(`${building.name}`);
  }

  return (
    <section className="home-building">
      <div className="buildingContainer">
        {buildingsToDisplay.map((building, index) => (
          <button key={index} onClick={() => handleClickedMenu(building)}>
            <img className="building-img" src={building.image} alt="" />
          </button>
        ))}
      </div>
      <div className="burger">
        <BurgerMenu />
      </div>
      <div className="menu-icons">
        <ButtonSound
          text="POPULATION"
          className="icons"
          navigateTo="/users/:user_id/provinces/:province_id/inhabitants"
        />
        <ButtonSound
          text="BATIMENTS"
          className="icons"
          navigateTo="/buildings"
        />
        <ButtonSound
          text="TECHNOLOGIES"
          className="icons"
          navigateTo="/technology"
        />
        <Button onClick={() => handleClick("logout")} className="logoutButton">
          SE DÉCONNECTER
        </Button>
      </div>
    </section>
  );
}

export default Map2;
