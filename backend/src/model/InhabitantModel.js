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
        console.log(query);
        console.log(values);
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
        console.log(query, "requete");
        if (error) reject(error);
        if (results[0] === undefined) reject(error);
        else resolve(results);
      });
    });
  }
}
