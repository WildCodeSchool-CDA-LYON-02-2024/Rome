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

  update(provinceId, buildingId, buildingData) {
    return new Promise((resolve, reject) => {
      const fields = Object.keys(buildingData)
        .map((key) => `${key} = ?`)
        .join(", ");
      const values = [...Object.values(buildingData), provinceId, buildingId];
      const query = `UPDATE building b
                JOIN province_building pb ON b.id = pb.building_id
                           SET ${fields}
                           WHERE pb.province_id = ? AND b.id = ?`; // Add JOIN ?
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  delete(buildingId) {
    // provinceId & JOIN to avoid deleting every building with the same id in all provinces
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
