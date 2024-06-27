import React, { useState } from 'react';
import building from '../services/buildings';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';


import Test from '../components/Test';
import { useNavigate } from 'react-router-dom';

function Map2({ handleClick }) {
  const [clickedButton, setClickedButton] = useState(null);
  const navigate = useNavigate();


  const buildings = building.batiments;
  const buildingsToDisplay = buildings.filter(
    (building) => building.state === 'enable'
  );

  function handleClick(button) {
    setClickedButton(button);
    
    if (clickedButton === 'populations') {
      navigate('/users/:user_id/provinces/:province_id/inhabitants');
    }
  }
  function handleClickedMenu(building) {
    alert(`${building.name}`);
  }

  const goldPercentage = building.ressources.filter(
    (ressource) => ressource.name === 'gold'
  );
  const foodPercentage = building.ressources.filter(
    (ressource) => ressource.name === 'food'
  );

  const widthGold = (120 * parseInt(goldPercentage[0].count)) / 100;
  const widthFood = (140 * parseInt(foodPercentage[0].count)) / 100;

  return (
    <section className='section-building'>
      {buildingsToDisplay.map((building, index) => (
        <button key={index} onClick={() => handleClickedMenu(building)}>
          <img className='building-img' src={building.image} alt="" />
        </button>
      ))}
      <div className='menu-icons'>
        <Button onClick={() => handleClick('populations')}>ARMEE</Button>
        <Button onClick={() => handleClick('provinces')}>BATIMENTS</Button>
        <Button onClick={() => handleClick('allies')}>ALLIES</Button>

      
      </div>

      <div
        className='progressBar fill-background'
        style={{ '--fill-width': `${widthFood}px`, '--bgColor': 'violet' }}
      >
        <ProgressBar>
          <div className='progressBar-icon'>🍇</div>
          <span className='text-progressBar'>{`${building.ressources[0].count}`}</span>
        </ProgressBar>
      </div>

      <div
        className='progressBar-or fill-background'
        style={{ '--fill-width': `${widthGold}px`, '--bgColor': 'orange' }}
      >
        <ProgressBar>
          <div className='progressBar-icon'>🪙</div>
          <span className='text-progressBar'>{`${building.ressources[1].count}`}</span>
        </ProgressBar>
      </div>
    </section>
  );
}

export default Map2;
