import React, { useState } from 'react';
import building from '../services/buildings';
import Button from '../components/Button';


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

     
    </section>
  );
}

export default Map2;
