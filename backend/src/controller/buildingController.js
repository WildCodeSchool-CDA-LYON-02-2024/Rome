import { Database } from "../model/Database.js";
import BuildingModel from "../model/BuildingModel.js";
import { provinceBuildingModel } from "./provinceBuildingController.js";

const db = new Database();
export const buildingModel = new BuildingModel(db);

/**
 * Construct a building
 */
const constructBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;

  const hasResources = true; // TODO: Verify resourcesAvaibility

  if (!hasResources)
    return res.status(400).json({ message: "Ressources insuffisantes" });

  provinceBuildingModel.getLevel(provinceId, buildingId).then((dataLevel) => {
    if (dataLevel.length === 0) {
      // TODO: insert
    } else {
      // TODO: update (= startConstruction + rename)
    }
  });

  provinceBuildingModel
    .startConstruction(provinceId, buildingId)
    .then((result) => {
      console.log(result);
      if (result.affectedRows > 0)
        return res.status(200).json({
          message: `Construction du bâtiment ${buildingId} dans la province ${provinceId} démarrée.`,
        });
      else return res.status(404).json({ message: "Bâtiment non trouvé" });
    })
    .catch((err) => res.status(500).json(err));
};

/**
 * Get all buildings by province
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getBuildingsByProvince = (req, res) => {
  const { provinceId } = req.params;

  buildingModel
    .selectAllByProvince(provinceId)
    .then((allBuilding) => res.status(200).json(allBuilding))
    .catch((err) => {
      res.status(500).json(err);
    });
};

/**
 * Get a building by ID within a province
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getBuildingById = (req, res) => {
  const { provinceId, buildingId } = req.params;

  buildingModel
    .selectById(provinceId, buildingId)
    .then((building) => res.status(200).json(building))
    .catch((err) => {
      res.status(500).json(err);
    });
};

/**
 * Update a building's information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;
  const buildingData = req.body;

  console.log(buildingData);

  buildingModel
    .update(provinceId, buildingId, buildingData)
    .then((result) => {
      if (result.affectedRows > 0)
        return res.status(200).json({
          message: `Building ${buildingId} in Province ${provinceId} has been updated.`,
        });
      else return res.status(404).json({ message: "Building not found" });
    })
    .catch((err) => res.status(500).json(err));
};

/**
 * Delete a building by ID within a province
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;

  provinceBuildingModel
    .deleteConstraint(provinceId, buildingId)
    .then(() => {
      return buildingModel.delete(buildingId);
    })
    .then((result) => {
      if (result.affectedRows > 0)
        return res.status(200).json({
          message: `Building ${buildingId} in Province ${provinceId} has been deleted.`,
        });
      else return res.status(404).json({ message: "Building not found" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default {
  constructBuilding,
  getBuildingsByProvince,
  getBuildingById,
  updateBuilding,
  deleteBuilding,
};
