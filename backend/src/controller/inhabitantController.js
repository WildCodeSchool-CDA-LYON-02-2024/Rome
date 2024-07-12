import { Database } from '../model/Database.js';
import InhabitantModel from '../model/InhabitantModel.js';
import { ressourceModel } from './ressourceController.js';
import {
  checkResourcesForInhabitantRole,
  costInhabitants,
} from '../../services/costInhabitants.js';

const db = new Database();
export const inhabitantModel = new InhabitantModel(db);

const getInhabitantByProvinceId = (req, res) => {
  const provinceId = parseInt(req.params.id, 10);
  inhabitantModel
    .selectByProvinceId(provinceId)
    .then((data) => {
      res.status(200);
      res.json(data);
    })
    .catch((error) => {
      if (res.status(404)) {
        res.json({ message: 'Inhabitants not found' });
      } else {
        res.json({ message: error });
      }
    });
};

const getInhabitantRoleIdByProvinceId = (req, res) => {
  const provinceId = parseInt(req.params.id, 10);
  console.log(provinceId);
  inhabitantModel.selectInhabitantRoleIdByProvinceId(provinceId)
    .then((data) => {
      res.status(200);
      res.json(data);
    })
    .catch((err) => {
      if (res.status(404)) {
        res.json({ message: 'Inhabitants not found' });
      } else {
        res.json({ message: err.message });
      }
     })
}

const getAllInhabitantsByProvinceIdAndUserId = (req, res) => {
  const provinceId = parseInt(req.params.province_id, 10);
  const userId = parseInt(req.params.user_id, 10);
  inhabitantModel
    .selectByProvinceIdandByUserId(provinceId, userId)
    .then((data) => {
      res.status(200);
      res.json(data);
    })
    .catch((error) => {
      if (res.status(404)) {
        res.json({ message: 'Province not found' });
      } else {
        res.json({ message: error });
      }
    });
};

const getInhabitantRoleByDescription = (req, res) => {
  // console.log(req.body.description);
  // console.log(req.body.provinceId);

  inhabitantModel
    .selectInhabitantRoleByDescription(req.body.description)

    .then((response) => {
      console.log(response, 'reponse id');
      const roleName = response.name;
      const roleId = response.id;
      const provinceId = req.body.provinceId;
      // console.log(typeof provinceId, 'province id');
      ressourceModel
        .selectByProvince(provinceId)
        .then((ressources) => {
          //  console.log(ressources, 'ressources dans 2');

          checkResourcesForInhabitantRole(
            roleName,
            ressources,
            costInhabitants,
            provinceId
          )
            .then(() => {
              inhabitantModel
                .createInhabitantByRoleandProvinceId(provinceId, roleId)
                .then(() => {
                  return res
                    .status(201)
                    .json({ message: 'Inhabitant created successfully' });
                })
                .catch((error) => {
                  console.error(error);
                  return res
                    .status(500)
                    .json({ message: 'Failed to create inhabitant' });
                });
            })
            .catch((err) => res.status(400).json({ message: err }));
        })
        .catch((error) => {
          res.json({ message: error.message });
        });
    })
    .catch((error) => {
      if (res.status(404)) {
        res.json({ message: 'Role not found for this inhabitant' });
      } else {
        res.json({ message: error });
      }
    });
};

export default {
  getInhabitantByProvinceId,
  getAllInhabitantsByProvinceIdAndUserId,
  getInhabitantRoleByDescription,
  getInhabitantRoleIdByProvinceId
};
