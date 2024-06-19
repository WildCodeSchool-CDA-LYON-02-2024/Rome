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
        const query = "select * from technology where id = ?;";
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
        const query = `SELECT * FROM technology JOIN province_technology ON province_technology.technology_id = technology.id JOIN province ON province_technology.province_id = province.id WHERE province.id = ?;`;
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
  