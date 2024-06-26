import React from 'react'
import building from '../services/buildings';
import Button from '../components/Button';



function Map2({handleClick}) {
  const buildings = building.batiments;

  const buildingsToDisplay = buildings.filter(building => building.state === "enable")
  
   function handleClick() {
    alert('Clicked')
   }
  
  function handleClickedMenu(building) {
    alert(`${building.name}`)
  }


  return (
    <section className='section-building'>
      {buildingsToDisplay.map((building, index) => (
        <button key={index} onClick={() => handleClickedMenu(building)}>
          <img className='building-img' src={building.image} alt='' />
        </button>
      ))}
      <div className='menu-icons'>
        <Button onClick={handleClick}>ARMEE</Button>
        <Button onClick={handleClick}>BATIMENTS</Button>
        <Button onClick={handleClick}>ALLIES</Button>
      </div>

     
    </section>
  );
}

export default Map2