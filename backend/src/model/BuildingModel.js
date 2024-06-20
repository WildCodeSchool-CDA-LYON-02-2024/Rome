export default class BuildingModel {
  constructor(db) {
    this.connection = db.connection;
  }

  createBuilding(name, description, image) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO building (name, description, image)
                           VALUES (?, ?, ?)`;
      const values = [name, description, image];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  selectAllByProvince(provinceId) {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM province p
                                    JOIN province_building pb ON p.id = pb.province_id
                                    JOIN building b ON b.id = pb.building_id
                           WHERE p.id = ?`;
      const values = [provinceId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  selectById(provinceId, buildingId) {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM province p
                                    JOIN province_building pb ON p.id = pb.province_id
                                    JOIN building b ON b.id = pb.building_id
                           WHERE p.id = ?
                             AND b.id = ?`;
      const values = [provinceId, buildingId];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  delete(buildingId) {
    return new Promise((resolve, reject) => {
      const query = `DELETE
                           FROM building
                           WHERE id = ?`;
      const values = [buildingId];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
