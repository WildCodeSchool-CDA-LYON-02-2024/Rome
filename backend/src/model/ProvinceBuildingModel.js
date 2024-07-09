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
        else resolve(result);
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
        else resolve(result);
      });
    });
  }

  createLevel(level, provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO province_building (level, province_id, building_id)
                           VALUES (?, ?, ?);`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  getLevel(provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `SELECT level
                           FROM province_building
                           WHERE province_id = ?
                             AND building_id = ?`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  updateLevel(provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      this.getLevel(provinceId, buildingId)
        .then((levelData) => {
          const query = `UPDATE province_building
                                   SET level = ?
                                   WHERE province_id = ?
                                     AND building_id = ?`;
          const level = parseInt(levelData[0].level);
          const values = [level + 1, provinceId, buildingId];
          this.connection.execute(query, values, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          });
        })
        .catch((err) => reject(err));
    });
  }

  // updateLevel(level, buildingId) {
  //   return new Promise((resolve, reject) => {
  //     const query = `UPDATE province_building
  //                          SET level = ?
  //                          WHERE id = ?`;
  //     const values = [level, buildingId];
  //     this.connection.query(query, values, (err, result) => {
  //       if (err) reject(err);
  //       else resolve(result);
  //     });
  //   });
  // }
}
