import React, { useEffect, useState } from 'react';
import useApi from '../api/useApi';
import '../components/GenericCard/GenericCard.css';
import '../components/Test.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
useAuth


function Test() {
  const api = useApi();
  const [inhabitant, setInhabitant] = useState([]);
  const navigate = useNavigate();
  const { authUser } = useAuth();

 

  function getInhabitantsByProvinceIdandUserId(provinceId, userId) {
    api.get(`/users/${userId}/provinces/${provinceId}/inhabitants`)
      .then((response) => {
        const data = response.data;
        setInhabitant(data);
      }).catch((error) => {
        console.error(error);
       })
   }


  useEffect(() => {
    getInhabitantsByProvinceIdandUserId(authUser.province_id , authUser.id )
  }, [])
  



function handleClick() {
  navigate('/province');
}

  return (
    <div>
      <section className='card-wrapper'>
        <div>
          <Button className='close-btn' onClick={handleClick}>
            Fermer
          </Button>
        </div>
        {inhabitant.map((inhabitant,index) => (
          <div key={index} className='card-container'>
            <div className='img-container'>
              <img
                src={`${import.meta.env.VITE_APP_API_IMG_URL}${inhabitant.image}`}
                alt=''
                className='card-img'
              />
            </div>

            <h1>{inhabitant.role}</h1>
            <article className='description-container'>
              <p>{inhabitant.description}</p>
            </article>
            <ul className='description-container'>
              <li>Santé : {inhabitant.health}</li>
              <li>Défense : {inhabitant.defense}</li>
              <li>Attaque : {inhabitant.attack}</li>
            </ul>
            <div className='button-container'>
              <button className='card-button'>Améliorer</button>
            </div>
          </div>
        ))}
       
      </section>
    </div>
  );
}


export default Test;
