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

export default {
  read,
};
