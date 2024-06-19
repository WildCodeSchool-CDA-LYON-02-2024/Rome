export default class BuildingModel {
  constructor(db) {
    this.connection = db.connection;
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

  // const query = `DELETE b
  //                          FROM building b
  //                                   JOIN province_building pb ON b.id = pb.building_id
  //                                   JOIN province p ON p.id = pb.province_id
  //                          WHERE p.id = ?
  //                            AND b.id = ?`;

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
