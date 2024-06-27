import { Database } from "../model/Database.js";
import  InhabitantModel  from "../model/InhabitantModel.js";

const db = new Database();
export const inhabitantModel = new InhabitantModel(db);

const getInhabitantByProvinceId = (req, res) => {
  const provinceId = parseInt(req.params.id, 10);
  inhabitantModel.selectByProvinceId(provinceId)
    .then((data) => {
      res.status(200);
      res.json(data);
    }).catch((error) => {
      if (res.status(404)) {
        res.json({ message: 'Inhabitants not found' });
      } else {
        res.json({ message: error })
      }
     
    })
};

const getAllInhabitantsByProvinceIdAndUserId = (req,res) => {
  const provinceId = parseInt(req.params.province_id, 10);
  const userId = parseInt(req.params.user_id, 10);
  inhabitantModel.selectByProvinceIdandByUserId(provinceId, userId)
    .then((data) => {
      res.status(200);
      res.json(data);
    }).catch((error) => {
      if (res.status(404)) { 
        res.json({message: 'Province not found'});
      } else {
        res.json({ message: error });
      }
     })
}

export default  {
  getInhabitantByProvinceId, getAllInhabitantsByProvinceIdAndUserId
}