import { Database } from "../model/Database.js";
import ProvinceBuildingModel from "../model/ProvinceBuildingModel.js";

const db = new Database();
export const provinceBuildingModel = new ProvinceBuildingModel(db);

const deleteFK = (req, res) => {
  const { provinceId, buildingId } = req.params;

  provinceBuildingModel
    .deleteBuilding(provinceId, buildingId)
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
  deleteFK,
};
