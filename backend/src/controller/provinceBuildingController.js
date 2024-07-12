import { Database } from "../model/Database.js";
import ProvinceBuildingModel from "../model/ProvinceBuildingModel.js";
import ressourceController from "./ressourceController.js";

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
    .catch((err) =>
      res.status(500).json({
        error: "Failed to create constraint in province_building table.",
        details: err.message,
      }),
    );
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
        res.status(404).json({ message: "Foreign Key not found." });
      }
    })
    .catch((err) =>
      res.status(500).json({
        error: "Failed to delete constraint in province_building table.",
        details: err.message,
      }),
    );
};

/**
 * Construct a building
 * @param req
 * @param res
 * @returns {*}
 */
const constructBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;

  const createLevel = (level, provinceId, buildingId) => {
    provinceBuildingModel
      .createLevel(level, provinceId, buildingId)
      .then((result) => {
        if (result.affectedRows > 0) {
          // Update resources
          // ressourceController.update(req, res);
          // OR
          // ressourceController.ressourceModel
          //   .updateByProvince(quantity, provinceId, ressourceId) // updateResources(provinceId, requiredResources)
          //   .then(() => {
          return res.status(200).json({
            message: `Construction of building ${buildingId} in province ${provinceId} started.`,
          });
          //   })
          //   .catch((err) => res.status(500).json(err));
        } else {
          return res.status(404).json({ message: "Building not found." });
        }
      })
      .catch((err) => res.status(500).json(err));
  };

  const upgradeLevel = (provinceId, buildingId) => {
    provinceBuildingModel
      .updateLevel(provinceId, buildingId)
      .then((result) => {
        console.log(result);
        if (result.affectedRows > 0) {
          // Update resources
          // ressourceController.update(req, res);
          return res.status(200).json({
            message: `Upgrading building ${buildingId} in province ${provinceId} started.`,
          });
        } else return res.status(404).json({ message: "Building not found" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to upgrade level", details: err.message }),
      );
  };

  const levelManager = (provinceId) => {
    provinceBuildingModel
      .getLevel(provinceId, buildingId)
      .then((provinceLevel) => {
        if (provinceLevel.length === 0) {
          createLevel(1, provinceId, buildingId);
        } else {
          upgradeLevel(provinceId, buildingId);
        }
      })
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to manage level", details: err.message }),
      );
  };

  const verifyResources = (provinceId) => {
    ressourceController.ressourceModel
      .selectByProvince(provinceId)
      .then((provinceResources) => {
        // TODO: Add logic to check if resources are sufficient for construction/upgrade
        const requiredResources = [
          { id: 1, quantity: 100 },
          { id: 2, quantity: 200 },
        ]; // Example resource requirement (from config or database)

        const hasResources = provinceResources >= requiredResources;
        // const hasResources = checkResourcesAvailability(
        //   provinceResources,
        //   requiredResources,
        // );

        if (!hasResources) {
          return res.status(400).json({ message: "Insufficient resources" });
        }

        levelManager(provinceId);
      })
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to verify resources", details: err.message }),
      );
  };

  verifyResources(provinceId);
};

export default {
  createFK,
  deleteFK,
  constructBuilding,
};
