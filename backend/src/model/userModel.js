import bcrypt from "bcrypt";

export class userModel {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(username, email, password, Image) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10).then((passwordHash) => {
        const query = `INSERT INTO user (username, email, password, Image) VALUES (?,?,?,?)`;
        const values = [username, email, passwordHash, Image];
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

  login(email, password) {
    return new Promise((resolve, reject) => {
      const query = `select user.id, username, email, password, image from user  where email = ?
    `;
      const values = [email];
      this.connection.execute(query, values, (err, result) => {
        if (err) return reject(err);
        const hashPassword = result[0].password;
        bcrypt.compare(password, hashPassword).then((isValid) => {
          resolve({
            isAuthentificated: isValid,
            user: {
              id: result[0].id,
              username: result[0].username,
              email: result[0].email,
              image: result[0].image,
            },
          });
        });
      });
    });
  }
}
