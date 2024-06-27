export class RessourceModel {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = "select * from ressource;";
      const values = [];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      const query = "select * from ressource where id = ?;";
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  selectByProvince(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT ressource.id, ressource.name,ressource.image, province_ressource.quantity FROM ressource JOIN province_ressource ON province_ressource.ressource_id = ressource.id  WHERE province_id = ?;`;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  updateByProvince(quantity, province_id, ressource_id) {
    return new Promise((resolve, reject) => {
      const query = `update province_ressource SET quantity = ? WHERE province_id = ? AND ressource_id = ?`;
      const values = [quantity, province_id, ressource_id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
