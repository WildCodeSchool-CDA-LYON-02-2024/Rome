import React, { useEffect, useState } from 'react';
import useApi from '../api/useApi';
import '../components/GenericCard/GenericCard.css';
import '../components/Test.css';

function Test() {
  const api = useApi();
  const [inhabitant, setInhabitant] = useState([]);

  // function get(provinceId) {
  //   fetch(`http://localhost:3310/province/${provinceId}/inhabitant`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },

  //   })
  //   .then(data => data.json())
  //     .then(resp => {
  //     console.log(resp,"reponse")

  //   })

  //     .catch((error) => {
  //       console.error(error)
  //      })
  // }

  function getInhabitantsByProvinceId(provinceId) {
    api
      .get(`/province/${provinceId}/inhabitant`)

      .then((response) => {
        const data = response.data;
        setInhabitant(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getInhabitantsByProvinceId(3);
  }, []);

  console.log(inhabitant, 'habitant');
  return (
    // <section className='globalContainer'>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Nom</th>
    //         <th>Role</th>
    //         <th>Photo</th>
    //         <th>Description</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr key={inhabitant.id}>
    //         <td>{inhabitant.name}</td>
    //         <td>{inhabitant.role}</td>
    //         <td>{inhabitant.description}</td>
    //         <td>
    //           <img
    //             src={`${import.meta.env.VITE_APP_API_IMG_URL}${inhabitant.image}`}
    //             alt=''
    //           />
    //         </td>
    //         <td>
    //           <button>Supprimer</button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </section>
    <section className='card-wrapper'>
      <div key={inhabitant.id} className='card-container'>
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

      <div key={inhabitant.id} className='card-container'>
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
    </section>
  );
}

export default Test;
