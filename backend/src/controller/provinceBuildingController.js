import { Database } from "../model/Database.js";
import ProvinceBuildingModel from "../model/ProvinceBuildingModel.js";

const db = new Database();
export const provinceBuildingModel = new ProvinceBuildingModel(db);

const createFK = (req, res) => {
  const { level, provinceId, buildingId } = req.params;

  provinceBuildingModel
    .createConstraint(level, provinceId, buildingId)
    .then(() => {
      res.status(201).json({
        message: `Building ${buildingId}, level ${level} in Province ${provinceId} has been added to the database.`,
      });
    })
    .catch((err) => res.status(500).json(err));
};

const updateLevel = (req, res) => {
  const { level, buildingId } = req.params;

  provinceBuildingModel
    .updateLevel(level, buildingId)
    .then(() => {
      res.status(200).json({
        message: `The level of building ${buildingId} has been updated to ${level} in the database.`,
      });
    })
    .catch((err) => res.status(500).json(err));
};

const deleteFK = (req, res) => {
  const { provinceId, buildingId } = req.params;

  provinceBuildingModel
    .deleteConstraint(provinceId, buildingId)
    .then((result) => {
      if (result.affectedRows > 0) {
        return res.status(200).json({
          message: `Foreign Key between Province ${provinceId} and Building ${buildingId} in province_building table has been deleted.`,
        });
      } else {
        res.status(404).json({ message: "Foreign Key not found" });
      }
    })
    .catch((err) => res.status(500).json(err));
};

export default {
  createFK,
  updateLevel,
  deleteFK,
};
