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

const add = (req, res) => {
  // Extract the item data from the request body
  const id = req.params.id;
  const technologyID = parseInt(id);
  technologyModel
    .createByProvince(technologyID, req.body.provinceID)
    .then(() => {
      res.status(201).json({ message: "technology added successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to update user" });
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  technologyModel
    .delete(id)
    .then(() => {
      res.status(201).json({ message: "technology deleted successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to delete technology" });
    });
};

export default {
  read,
  readById,
  readByProvince,
  add,
  deleteById,
};
