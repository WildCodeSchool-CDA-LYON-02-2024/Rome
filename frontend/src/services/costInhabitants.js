import gold from '/images/gold.png'
import iron from '/images/iron.png'
import stone from '/images/stone.png'
import wood from '/images/wood.png'
import meat from '/images/meat.png'




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


const picturesRessources = {
  viande: {
    image: `${meat}`,
  },
  bois: {
    image: `${wood}`,
  },
  fer: {
    image: `${iron}`,
  },
  or: {
    image: `${gold}`,
  },
  pierre: {
    image: `${stone}`,
  },
};

export { costInhabitants, picturesRessources }