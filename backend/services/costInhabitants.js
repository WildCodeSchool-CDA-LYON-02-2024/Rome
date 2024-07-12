import { ressourceModel } from '../src/controller/ressourceController.js';

export const costInhabitants = {
  Legionary: {
    cost: {
      viande: 30,
      bois: 30,
      pierre: 40,
      fer: 30,
      or: 20,
    },
  },
  Senator: {
    cost: {
      viande: 40,
      bois: 40,
      pierre: 30,
      fer: 20,
      or: 20,
    },
  },
  Emperor: {
    cost: {
      viande: 40,
      bois: 40,
      pierre: 30,
      fer: 20,
      or: 20,
    },
  },
  Gladiator: {
    cost: {
      viande: 30,
      bois: 30,
      pierre: 40,
      fer: 30,
      or: 30,
    },
  },
  Praetorian_guard: {
    cost: {
      viande: 20,
      bois: 20,
      pierre: 20,
      fer: 20,
      or: 20,
    },
  },
  Merchant: {
    cost: {
      viande: 10,
      bois: 15,
      pierre: 5,
      fer: 7,
      or: 1,
    },
  },
};

export function checkResourcesForInhabitantRole(
  inhabitantRoleName,
  ressources,
  costInhabitants,
  provinceID
) {
  return new Promise((resolve, reject) => {
    const inhabitantCost = costInhabitants[inhabitantRoleName].cost;

    const verifyResourceAvailability = () => {
      Object.keys(inhabitantCost).forEach((resource) => {
        const requiredQuantity = inhabitantCost[resource];
        const availableResource = ressources.find(
          (item) => item.name.toLowerCase() === resource
        );

        if (
          !availableResource ||
          availableResource.quantity < requiredQuantity
        ) {
          // throw new Error('quantité insuffisante de ' + resource);
          return reject('quantité insuffisante de ' + resource);
        }
      });
    };

    const resourceUpdater = () => {
      return Object.keys(inhabitantCost).map((resource) => {
        const requiredQuantity = inhabitantCost[resource];
        const availableResource = ressources.find(
          (item) => item.name.toLowerCase() === resource
        );
        availableResource.quantity -= requiredQuantity;
        return ressourceModel.updateByProvince(
          availableResource.quantity,
          provinceID,
          availableResource.id
        );
      });
    };

    verifyResourceAvailability();
    const allUpdateResources = resourceUpdater();

    Promise.all(allUpdateResources)
      .then(() => resolve('All resources updated ! '))
      .catch((err) => reject(err));
  });

  /*.then((res) => {
         console.log(res, 'resultat update dans cosInhabitants');
         res.status(201).json({ message: 'Resources updated successfully' });
       })
       .catch((err, res) => {
         res.status(500).json({ message: err.message });
       });*/

  //  return sufficientResources;
}

//  export function updateResourcesInDB(roleName, resources, cost,provinceID) {
//    switch (roleName.toLowerCase()) {
//      case 'legionary':
//      case 'senator':
//      case 'emperor':
//      case 'gladiator':
//      case 'praetorian_guard':
//      case 'merchant':
//        Object.keys(cost[roleName]).forEach((resource) => {
//          const requiredQuantity = cost[roleName][resource];
//          const availableResource = resources.find(
//            (item) => item.name.toLowerCase() === resource
//          );

//          if (availableResource) {
//            // Soustraire la quantité nécessaire des ressources
//            availableResource.quantity -= requiredQuantity;
//            // Appeler la méthode pour mettre à jour la ressource dans la base de données
//            ressourceModel.updateByProvince(
//              requiredQuantity,
//              provinceID,
//              availableResource.id
//            )
//              .then((res) => {

//                console.log(res,"resultat update dans cosInhabitants");
//               res.status(201).json({ message: 'Resources updated successfully' })
//              })
//              .catch((err,res) => {
//               res.status(500).json({ message: err.message });
//            })

//          }
//        });
//        break;
//      default:
//        console.log(`Rôle d'habitant inconnu : ${roleName}`);
//        break;
//    }
//  }
