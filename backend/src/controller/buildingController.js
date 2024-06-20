import { Database } from "../model/Database.js";
import BuildingModel from "../model/BuildingModel.js";
import { provinceBuildingModel } from "./provinceBuildingController.js";

const db = new Database();
export const buildingModel = new BuildingModel(db);

const getBuildingsByProvince = (req, res) => {
  const { provinceId } = req.params;

  buildingModel
    .selectAllByProvince(provinceId)
    .then((allBuilding) => res.status(200).json(allBuilding))
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getBuildingById = (req, res) => {
  const { provinceId, buildingId } = req.params;

  buildingModel
    .selectById(provinceId, buildingId)
    .then((building) => res.status(200).json(building))
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;

  provinceBuildingModel
    .deleteConstraint(provinceId, buildingId)
    .then(() => {
      return buildingModel.delete(buildingId);
    })
    .then((result) => {
      if (result.affectedRows > 0) {
        return res.status(200).json({
          message: `Building ${buildingId} in Province ${provinceId} has been deleted.`,
        });
      } else {
        res.status(404).json({ message: "Building not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default {
  getBuildingsByProvince,
  getBuildingById,
  deleteBuilding,
};
