import { Database } from '../model/Database.js';
import ProvinceModel from '../model/ProvinceModel.js';

const db = new Database();
export const provinceModel = new ProvinceModel(db);

const addProvinceByUser = (req, res) => {
  const { name, description, image } = req.body;

  const userId = parseInt(req.params.userId, 10);

  provinceModel
    .createByUser(name, description, image, userId)
    .then(() => {
      res.status(201).json({ message: 'Province created successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to create province' });
    });
};

export default { addProvinceByUser };
