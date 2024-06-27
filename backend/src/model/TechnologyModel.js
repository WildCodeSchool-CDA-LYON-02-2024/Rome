export class TechnologyModel {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = "select * from technology;";
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
      const query =
        "SELECT technology.id , technology.name , technology.description, technology.image, ressource.id AS ressource_id, ressource.name AS ressource_name, ressource.description AS ressource_description, ressource.image AS ressource_image, technology_ressource.cost AS ressource_cost FROM technology JOIN technology_ressource ON technology.id = technology_ressource.technology_id JOIN ressource ON technology_ressource.ressource_id = ressource.id WHERE technology.id = ?;";
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
      const query = `SELECT * FROM technology JOIN province_technology ON province_technology.technology_id = technology.id  WHERE province_id = ?;`;
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

  createByProvince(technology_id, province_id) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO province_technology (technology_id, province_id) VALUES (?, ?);`;
      const values = [technology_id, province_id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = "delete from technology where id = ?;";
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
}
