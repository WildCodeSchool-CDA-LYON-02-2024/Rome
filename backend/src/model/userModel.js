import bcrypt from 'bcrypt';

export class userModel {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(name, email, password, Image) {
    return new Promise((resolve, reject) => {

        const query = `INSERT INTO user (username, email, password, Image) VALUES (?,?,?,?)`;
        const values = [name, email, password, Image];
        this.connection.execute(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
      
            resolve(result);
          }
        });

    });
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      //   const query = `select user.id, username, email, password, image from user  where email = ?
      // `;
      const query = ` select user.id as userId, username, email, password, user.image, province.id as provinceId from user left join province on user.id = province.user_id  where email = ?`;
     
      const values = [email];
      this.connection.execute(query, values, (err, result) => {
       
        console.log(result,"resultat login")
        if (err) return reject(err);
        const hashPassword = result[0].password;
        const userId = result[0].userId;
        const provinceId = result[0].provinceId;
        console.log(userId);
        console.log(provinceId);
        bcrypt.compare(password, hashPassword).then((isValid) => {
          resolve({
            isAuthentificated: isValid,
            user: {
              id: result[0].userId,
              username: result[0].username,
              email: result[0].email,
              image: result[0].image,
              province: result[0].provinceId,
            },
          });
        });
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM user WHERE id = ?`;
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

  update(username, email, password, image, id) {
    return new Promise((resolve, reject) => {
      bcrypt
        .hash(password, 10)
        .then((passwordHash) => {
          const query = `UPDATE user SET username=?, email=?, password=?, image=? WHERE id=?`;
          const values = [username, email, passwordHash, image, id];
          this.connection.execute(query, values, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        })
        .catch((err) => {
          reject(err); // Handle bcrypt hashing error
        });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      const query = 'select * from user where id = ?;';
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
