export default class BuildingModel {
  constructor(db) {
    this.connection = db.connection;
  }

  selectAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM building`;
      const values = [];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  selectById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM building
                           WHERE id = ?`;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  selectByProvince(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM building AS b
                                    JOIN province_building AS pb ON b.id = pb.building_id
                                    JOIN province AS p ON p.id = pb.province_id
                           WHERE p.id = ?`;
      const values = [id];
      this.connection(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE
                           FROM building
                           WHERE id = ?`;
      const values = [id];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
