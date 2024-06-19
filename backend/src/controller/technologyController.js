import { Database } from "../model/Database.js";
import { TechnologyModel } from "../model/TechnologyModel.js";

const db = new Database();
const technologyModel = new TechnologyModel(db);

const read = (req, res) => {
  technologyModel
    .read()
    .then((allTechnology) => {
      res.json(allTechnology);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
  const id = req.params.id;
  technologyModel
    .readById(id)
    .then((allTechnology) => {
      res.json(allTechnology);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readByProvince = (req, res) => {
  const id = req.params.id;
  technologyModel
    .selectByProvince(id)
    .then((allTechnology) => {
      res.json(allTechnology);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  technologyModel
    .delete(id)
    .then((allTechnology) => {
      res.json(allTechnology);
    })
    .catch((error) => {
      res.json(error);
    });
};

export default {
  read,
  readById,
  readByProvince,
  deleteById,
};
