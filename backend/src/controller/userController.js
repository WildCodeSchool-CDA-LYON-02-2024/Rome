import { Database } from "../model/Database.js";
import { userModel} from "../model/userModel.js";


const db = new Database();
const UserModel = new userModel(db);


const register = (req,res)=>{


    
    //to create user
    
    UserModel.create(req.body.username, req.body.password,req.body.email, req.body.image)
    .then(()=>{
        res.status(201).json({
            message:'user created'
        })
    
    }).catch(err=>{
        res.status(500).json({err})
    
    })
    
    
    }

    
    export default{ register}