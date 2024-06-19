export class BuildingModel {
  constructor(db) {
    this.connection = db.connection;
  }

  read() {
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

  readById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT *
                           FROM building
                           WHERE id=?`;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM building WHERE id=?`;
      const values = [id];
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
