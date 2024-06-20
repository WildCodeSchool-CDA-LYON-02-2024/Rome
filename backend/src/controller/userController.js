import { Database } from "../model/Database.js";
import { userModel } from "../model/userModel.js";
import generateToken from "../model/service/generateToken.js";

const db = new Database();
const UserModel = new userModel(db);

const register = (req, res) => {
  //to create user

  UserModel.create(
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.image
  )
    .then(() => {
      res.status(201).json({
        message: "user created",
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};
const login = (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  UserModel.login(email, password)
    .then(({ isAuthentificated, user }) => {
      if (!isAuthentificated) {
        return res.status(401).json({ message: "invalid to login" });
      }
      return res.status(201).json({
        user,
        message: "Authentification successful",
        token: generateToken(user),
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Failed to login" });
    });
};
const deleteById = (req, res) => {
   
      const id = req.params.id;
      UserModel
        .delete(id)
        .then(() => {
          res.status(201).json({ message: "User deleted successfully" });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: "Failed to delete user" });
        });
    } 

    const update = (req, res) => {
       
          const id = req.params.id;
          const { username, email, password, image } = req.body;
          UserModel
            .update(username, email, password, image, id)
            .then(() => {
              res.status(201).json({ message: "User updated successfully" });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ message: "Failed to update user" });
            });
        }
      
 
export default { register, login,deleteById,update };
