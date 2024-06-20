import React from 'react'
import building from '../services/buildings';


function Map2() {
  const buildings = building.batiments;

  return (
    <section className='section-building'>
      {buildings.map((building, index) => (
        
        <div key={index}>
          <img src={building.image} alt="" style={{ width: 100, height: 100 }} />
        </div>
      ))}
    </section>
  );
}

export default Map2