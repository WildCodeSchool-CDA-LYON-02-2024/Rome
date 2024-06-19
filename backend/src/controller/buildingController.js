import { Database } from "../model/Database.js";
import BuildingModel from "../model/BuildingModel.js";

const db = new Database();
const buildingModel = new BuildingModel(db);

const read = (req, res) => {
  buildingModel
    .selectAll()
    .then((allBuilding) => res.json(allBuilding))
    .catch((err) => {
      res.json(err);
    });
};

const readById = (req, res) => {
  buildingModel
    .selectById(id)
    .then((building) => res.json(building))
    .catch((err) => {
      res.json(err);
    });
};

const readByProvince = (req, res) => {
  buildingModel
    .selectByProvince(id)
    .then((building) => res.json(building))
    .catch((err) => {
      res.json(err);
    });
};

const remove = (id) => {
  buildingModel
    .delete(id)
    .then((id) => res.json(id))
    .catch((err) => {
      res.json(err);
    });
};

export default {
  read,
  readById,
  readByProvince,
  remove,
};
