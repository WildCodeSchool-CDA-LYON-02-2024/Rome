import React from 'react'
import Map2 from './Map2';
import Ressource from '../components/Ressource/Ressource';
import '../App2.css';
import Profil from '../components/User/Profil';

function HomePage ()  {
  return (
    <>
      <div className='title-app-container'>
        <Profil/>
        <Ressource />
        <Map2 />
      </div>
    </>
  );
}

export default HomePage
