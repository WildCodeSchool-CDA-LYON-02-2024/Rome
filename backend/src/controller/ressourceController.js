import { Database } from "../model/Database.js";
import { RessourceModel } from "../model/RessourceModel.js";

const db = new Database();
const ressourceModel = new RessourceModel(db);

const read = (req, res) => {
  ressourceModel
    .read()
    .then((allRessource) => {
      res.json(allRessource);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
  const id = req.params.id;
  ressourceModel
    .readById(id)
    .then((allRessource) => {
      res.json(allRessource);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readByProvince = (req, res) => {
  const id = req.params.id;
  ressourceModel
    .selectByProvince(id)
    .then((allRessource) => {
      res.json(allRessource);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  // Extract the item data from the request body
  const id = req.params.id;
  const provinceID = parseInt(id);
  const { quantity, ressourceID } = req.body;

  ressourceModel
    .updateByProvince(quantity, provinceID, ressourceID)
    .then(() => {
      res.status(201).json({ message: "ressource updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to update ressource" });
    });
};

export default {
  read,
  readById,
  readByProvince,
  update,
};
