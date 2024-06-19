export default class ProvinceBuildingModel {
  constructor(db) {
    this.connection = db.connection;
  }

  deleteBuilding(provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM province_building WHERE province_id = ? AND building_id = ?`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
