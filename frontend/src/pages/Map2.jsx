import React from 'react'
import building from '../services/buildings';
import IconsBar from '../components/IconsBar';
import Button from '../components/Button';


function Map2({handleClick}) {
  const buildings = building.batiments;

   function handleClick() {
    alert('Clicked')
   }
  
  function handleClickedMenu(building) {
    alert(`${building.name}`)
  }

  return (
    <section className='section-building'>
      {buildings.map((building, index) => (
        <button key={index} onClick={()=> handleClickedMenu(building)}>
          <img
            src={building.image}
            alt=''
            style={{ width: 75, height: 75 }}
          />
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