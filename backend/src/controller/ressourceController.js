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
  const id = req.params.id;
  const provinceID = parseInt(id);
  const { quantities, ressourceIDs } = req.body;

  if (!Array.isArray(quantities) || !Array.isArray(ressourceIDs) || quantities.length !== ressourceIDs.length) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const updatePromises = quantities.map((quantity, index) => {
    const ressourceID = ressourceIDs[index];
    return ressourceModel.updateByProvince(quantity, provinceID, ressourceID);
  });

  Promise.all(updatePromises)
    .then(() => {
      res.status(201).json({ message: "Resources updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to update resources" });
    });
};


export default {
  read,
  readById,
  readByProvince,
  update,
};
