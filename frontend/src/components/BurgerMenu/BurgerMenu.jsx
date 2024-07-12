import Button from "../Button";
import ButtonSound from "../Sound/ButtonSound";

import "./BurgerMenu.css";

export default function BurgerMenu() {
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
  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <ButtonSound
            text="POPULATION"
            className="burgerIcons"
            navigateTo="/users/:user_id/provinces/:province_id/inhabitants"
          />
        </li>
        <li>
          <ButtonSound
            text="BATIMENTS"
            className="burgerIcons"
            navigateTo="/buildings"
          />
        </li>
        <li>
          <ButtonSound
            text="TECHNOLOGIES"
            className="burgerIcons"
            navigateTo="/technology"
          />
        </li>
        <li>
        <ButtonSound
            text="Se déconnecter"
            className="burgerIcons"
            navigateTo="/"
          />
        </li>
      </ul>
      <div className="menu-icons"></div>
    </div>
  );
}
