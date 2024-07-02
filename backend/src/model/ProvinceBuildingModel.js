export default class ProvinceBuildingModel {
  constructor(db) {
    this.connection = db.connection;
  }

  createConstraint(level, provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO province_building (level, province_id, building_id)
                           VALUES (?, ?, ?)`;
      const values = [level, provinceId, buildingId];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  updateLevel(level, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE province_building SET level = ? WHERE id = ?`;
      const values = [level, buildingId];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  deleteConstraint(provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `DELETE
                           FROM province_building
                           WHERE province_id = ?
                             AND building_id = ?`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  startConstruction(level, provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO province_building (level, province_id, building_id)
                           VALUES (?, ?, ?)`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
