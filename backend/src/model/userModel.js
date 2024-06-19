



import bcrypt from "bcrypt" 


export class userModel {
    constructor(db /* CLASS DATABASE */) {
      //this.db = db;
    this.connection = db.connection;
    }


create(username, email, password, Image) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10).then((passwordHash) => {
        const query = `INSERT INTO user (username, email, password, Image) VALUES (?,?,?,?)`;
        const values = [
          username,
          email,
          passwordHash,
          Image,
        ];
        this.connection.execute(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
  }
}
