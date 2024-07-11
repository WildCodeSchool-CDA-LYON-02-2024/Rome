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

/**
 * Construct a building
 * @param req
 * @param res
 * @returns {*}
 */
const constructBuilding = (req, res) => {
  const { provinceId, buildingId } = req.params;

  // Verify resource availability
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
        return res.status(400).json({ message: "Ressources insuffisantes" });
      }

      // Fetch current building level
      provinceBuildingModel
        .getLevel(provinceId, buildingId)
        .then((provinceLevel) => {
          if (provinceLevel.length === 0) {
            // Construct new building
            provinceBuildingModel
              .createLevel(1, provinceId, buildingId)
              .then((result) => {
                if (result.affectedRows > 0) {
                  // Update resources
                  ressourceController.update(req, res);
                  // ressourceController.ressourceModel
                  //   .updateByProvince(quantity, provinceId, ressourceId) // updateResources(provinceId, requiredResources)
                  //   .then(() => {
                  //     return res.status(200).json({
                  //       message: `Construction du bâtiment ${buildingId} dans la province ${provinceId} démarrée.`,
                  //     });
                  //   })
                  //   .catch((err) => res.status(500).json(err));
                } else {
                  return res
                    .status(404)
                    .json({ message: "Bâtiment non trouvé" });
                }
              })
              .catch((err) => res.status(500).json(err));
          } else {
            // Upgrade existing building
            provinceBuildingModel
              .updateLevel(provinceId, buildingId)
              .then((result) => {
                console.log(result);
                if (result.affectedRows > 0) {
                  // Update resources
                  ressourceController.update(req, res);
                } else
                  return res
                    .status(404)
                    .json({ message: "Bâtiment non trouvé" });
              })
              .catch((err) => res.status(500).json(err));
          }
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
};

/*
// Helper function to update resources
const updateResources = (provinceId, requiredResources) => {
  const quantities = requiredResources.map((resource) => -resource.quantity); // Negative for deduction
  const ressourceIDs = requiredResources.map((resource) => resource.id);

  const req = {
    params: { id: provinceId },
    body: { quantities, ressourceIDs },
  };
  return ressourceModel.update(req);
};
 */

export default {
  createFK,
  deleteFK,
  constructBuilding,
};
