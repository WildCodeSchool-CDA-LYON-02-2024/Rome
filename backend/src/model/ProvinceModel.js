export default class ProvinceModel{
  constructor(db) {
    this.connection = db.connection;
  }

  createByUser(name,description,image,userId) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO province (name, description,image,period_id, user_id,battle_id, alliance_id ) VALUES (?,?,?,1,?,1,1) ;';
      const values = [name, description, image, userId];
      this.connection.query(query, values, (err, result) => {
       
        if (err) { 
          reject(err);
        } else {
          resolve(result);
        }
      })
     })
  }
}