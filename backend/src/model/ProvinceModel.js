export default class ProvinceModel{
  constructor(db) {
    this.connection = db.connection;
  }

  createByUser(name,userId) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO province (name,period_id, user_id ) VALUES (?,1,?) ;';
      const values = [name, userId];
      this.connection.query(query, values, (err, result) => {
       
        if (err) { 
          reject(err);
        } else {
          console.log(result,"result");
          resolve(result);
        }
      })
     })
  }
}