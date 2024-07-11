export default class InhabitantModel {
  constructor(db) {
    this.connection = db.connection;
  }

  selectByProvinceId(id) {
    return new Promise((resolve, reject) => {
      const query =
        "select province.name as province, inhabitant.id, role.name as role, role.description, role.image, inhabitant.health, inhabitant.attack, inhabitant.defense from inhabitant inner join  role on role.id = inhabitant.role_id inner join province on inhabitant.province_id = province.id where province.id = ?";
      const values = [id];

      this.connection.execute(query, values, (error, results, fields) => {
        // console.log(query);
        // console.log(values);
        if (error) reject(error);
        if (results[0] === undefined) reject(error);
        else resolve(results);
      });
    });
  }

  selectByProvinceIdandByUserId(provinceId, userId) {
    return new Promise((resolve, reject) => {
      const query =
        "select inhabitant.health, inhabitant.attack, inhabitant.defense, role.image, role.name, role.status, role.description, province.name from inhabitant inner join role on inhabitant.role_id = role.id inner join province on province.id= inhabitant.province_id inner join user on user.id = province.user_id where province.id = ? and user.id = ?;";
      const values = [provinceId, userId];
      this.connection.execute(query, values, (error, results, fields) => {
        // console.log(query, "requete");
        if (error) reject(error);
        if (results[0] === undefined) reject(error);
        else resolve(results);
      });
    });
  }
  
  initPopulation(provinceId) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO inhabitant(health, attack, defense, image, province_id, role_id) VALUES (100, 75, 50, "legionary.jpg", ?, 1), (80, 50, 60, "senator.jpg", ?, 2), (120, 90, 70, "emperor.jpg", ?, 3), (110, 80, 60, "gladiator.jpg", ?, 4), (90, 70, 65, "praetorian_guard.jpg", ?, 5), (100, 50, 55, "merchant.jpg", ?, 6)';
      
      const values = [provinceId,provinceId,provinceId,provinceId,provinceId,provinceId];
      this.connection.execute(query, values, (error, result, fields) => {
        // console.log(query,"requete")
        if (error) {
          reject(error);
        } else {
          // console.log(result, "resultat init population");
          resolve(result);
        }
      })
    })
  }
}
