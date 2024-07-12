export class RessourceModel {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = 'select * from ressource;';
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
      const query = 'select * from ressource where id = ?;';
      const values = [id];
      this.connection.execute(query, values, (err, results) => {
        console.log(query, 'requete readById');

        console.log(results);
        if (err) {
          reject(err);
        } else {
          console.log(results, 'ressources');
          resolve(results);
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
        // console.log("query ressource", query)
        //  console.log(values,"values update")
        if (err) {
          reject(err);
        } else {
          //    console.log(result, 'update');
          resolve(result);
        }
      });
    });
  }

  initRessource(provinceId) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO province_ressource(quantity,province_id,ressource_id) VALUES (100, ?, 1), (100, ?, 2), (100,?, 3), (100,?, 4), (100,?, 5)';

      const values = [
        provinceId,
        provinceId,
        provinceId,
        provinceId,
        provinceId,
      ];
      this.connection.execute(query, values, (error, result, fields) => {
        // console.log(query, 'requete');
        if (error) {
          reject(error);
        } else {
          // console.log(result, 'resultat init ressource');
          resolve(result);
        }
      });
    });
  }
}
