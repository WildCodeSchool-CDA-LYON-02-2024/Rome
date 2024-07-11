import React, { useEffect, useState } from 'react';
import useApi from '../api/useApi';
import '../components/GenericCard/GenericCard.css';
import '../components/Test.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Test() {
  const api = useApi();
  // const [inhabitant, setInhabitant] = useState([]);
  const navigate = useNavigate();
  const { authUser, token,inhabitant,setInhabitant } = useAuth();
  const [ressources, setRessources] = useState([]);
  const [ressourcesToUpdate, setRessourcesToUpdate] = useState([]);
  const provinceID = authUser.province_id;

  function getInhabitantsByProvinceIdandUserId(provinceId, userId) {
    console.log(provinceId, userId);
    api
      .get(`/users/${userId}/provinces/${provinceId}/inhabitants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;

        setInhabitant(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getInhabitantsByProvinceIdandUserId(authUser.province_id, authUser.id);
  }, []);

  console.log(inhabitant, 'inhabitant');

  const legionary = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'legionary.jpg'
  );

  console.log(legionary.length, 'quantité');

  const senator = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'senator.jpg'
  );

  const emperor = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'emperor.jpg'
  );

  const gladiator = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'gladiator.jpg'
  );

  const praetorian_guard = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'praetorian_guard.jpg'
  );

  const merchant = inhabitant.filter(
    (inhabitant) => inhabitant.image === 'merchant.jpg'
  );

  const totalSenator = senator.length;
  const totalEmperor = emperor.length;
  const totalGladiator = gladiator.length;
  const totalPraetorian_guard = praetorian_guard.length;
  const totalMerchant = merchant.length;
  const totalLegionary = legionary.length

  const costInhabitants = {
    legionary: {
      cost: {
        viande: 30,
        bois: 30,
        pierre: 40,
        fer: 30,
        or: 20,
      },
    },
    senator: {
      cost: {
        viande: 40,
        bois: 40,
        pierre: 30,
        fer: 20,
        or: 20,
      },
    },
    emperor: {
      cost: {
        viande: 40,
        bois: 40,
        pierre: 30,
        fer: 20,
        or: 20,
      },
    },
       gladiator: {
      cost: {
        viande: 30,
        bois: 30,
        pierre: 40,
        fer: 30,
        or: 30,
      },
    },
    praetorian_guard: {
      cost: {
        viande: 20,
        bois: 20,
        pierre: 20,
        fer: 20,
        or: 20,
      },
    },
    merchant: {
      cost: {
        viande: 10,
        bois: 15,
        pierre: 5,
        fer: 7,
        or: 1,
      },
    },
  };

  const totalCostWood =
    totalSenator * costInhabitants.senator.cost.bois +
    totalEmperor * costInhabitants.legionary.cost.bois +
    totalEmperor * costInhabitants.emperor.cost.bois +
    totalGladiator * costInhabitants.gladiator.cost.bois +
    totalPraetorian_guard * costInhabitants.praetorian_guard.cost.bois +
    totalMerchant * costInhabitants.merchant.cost.bois;

  const totalCostMeat =
    totalSenator * costInhabitants.senator.cost.viande +
    totalEmperor * costInhabitants.legionary.cost.viande +
    totalEmperor * costInhabitants.emperor.cost.viande +
    totalGladiator * costInhabitants.gladiator.cost.viande +
    totalPraetorian_guard * costInhabitants.praetorian_guard.cost.viande +
    totalMerchant * costInhabitants.merchant.cost.viande;

  const totalCostStone =
    totalSenator * costInhabitants.senator.cost.pierre +
    totalEmperor * costInhabitants.legionary.cost.pierre +
    totalEmperor * costInhabitants.emperor.cost.pierre +
    totalGladiator * costInhabitants.gladiator.cost.pierre +
    totalPraetorian_guard * costInhabitants.praetorian_guard.cost.pierre +
    totalMerchant * costInhabitants.merchant.cost.pierre;

  const totalCostIron =
    totalSenator * costInhabitants.senator.cost.fer +
    totalEmperor * costInhabitants.legionary.cost.fer +
    totalEmperor * costInhabitants.emperor.cost.fer +
    totalGladiator * costInhabitants.gladiator.cost.fer +
    totalPraetorian_guard * costInhabitants.praetorian_guard.cost.fer +
    totalMerchant * costInhabitants.merchant.cost.fer;

  const totalCostGold =
    totalSenator * costInhabitants.senator.cost.or +
    totalEmperor * costInhabitants.legionary.cost.or +
    totalEmperor * costInhabitants.emperor.cost.or +
    totalGladiator * costInhabitants.gladiator.cost.or +
    totalPraetorian_guard * costInhabitants.praetorian_guard.cost.or +
    totalMerchant * costInhabitants.merchant.cost.or;

  console.log(totalCostWood, 'bois total');
  console.log(totalCostMeat, 'viande total');
  console.log(totalCostStone, 'pierre total');
  console.log(totalCostIron, 'fer total');
  console.log(totalCostGold, 'or total');



 

    useEffect(() => {
      const updateQuantities = () => {
        setRessources((prevRessources) => {
          const updatedQuantities = prevRessources.map((ressource) => {
            let updatedQuantity = ressource.quantity;

            switch (ressource.name) {
              case 'Bois':
                updatedQuantity -= totalCostWood;
                break;
              case 'Viande':
                updatedQuantity -= totalCostMeat;
                break;
              case 'Pierre':
                updatedQuantity -= totalCostStone;
                break;
              case 'Fer':
                updatedQuantity -= totalCostIron;
                break;
              case 'Or':
                updatedQuantity -= totalCostGold;
                break;
              default:
                console.log(`Cette ressource n'est pas disponible`);
            }

            return { ...ressource, quantity: updatedQuantity };
          });

         
          setRessourcesToUpdate(updatedQuantities);

         
          return updatedQuantities;
        });
      };

      console.log(ressourcesToUpdate, 'quantité à update');

      const sendUpdatedQuantities = (updatedQuantities) => {
        if (updatedQuantities.length > 0) {
          console.log('je passe ici');
          const quantitiesToUpdate = updatedQuantities.map(
            (res) => res.quantity
          );
          const idsToUpdate = updatedQuantities.map((res) => res.id);

          fetch(`http://localhost:3310/province/${provinceID}/ressource`, {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              quantities: quantitiesToUpdate,
              ressourceIDs: idsToUpdate,
              provinceID,
            }),
          })
            .then((response) => {
              console.log(response.data, 'response');
              if (response.status === 201) {
                console.log('Ressources mises à jour avec succès');
              } else {
                console.error(
                  'Erreur lors de la mise à jour des ressources :',
                  response.statusText
                );
              }
            })
            .catch((err) => {
              console.error(
                'Erreur lors de la mise à jour des ressources :',
                err
              );
            });
        }
      };

      const interval = setInterval(() => {
        console.log('interval');
        updateQuantities(ressources);
        sendUpdatedQuantities(ressourcesToUpdate);
      }, 5000); 

      return () => clearInterval(interval);
    }, [provinceID, ressourcesToUpdate]);

  useEffect(() => {
    api
      .get(`http://localhost:3310/province/${provinceID}/ressource`)
      .then((response) => {
        console.log(response.data, 'ressources dans composants habitants');
        setRessources(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [provinceID,ressourcesToUpdate]);


  console.log(ressources,"données")
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
        {inhabitant.map((item, index) => (
          <div key={index} className='card-container'>
            <div className='img-container'>
              <img
                src={`${import.meta.env.VITE_APP_API_IMG_URL}${item.image}`}
                alt=''
                className='card-img'
              />
            </div>

            <h1>{item.role}</h1>
            <article className='description-container'>
              <p>{item.description}</p>
            </article>
            <ul className='description-container'>
              <li>Santé : {item.health}</li>
              <li>Défense : {item.defense}</li>
              <li>Attaque : {item.attack}</li>
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
