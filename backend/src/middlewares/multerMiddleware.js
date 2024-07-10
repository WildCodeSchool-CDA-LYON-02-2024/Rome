import multer, { diskStorage } from "multer";

// indique où les fichiers entrant vont être enregistrés
const storage = diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/images");
  },
  // explique à multer quel nom de fichier utiliser
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0];
    const extension = file.mimetype.split("/")[1];
    callback(null, `${name + Date.now()}.${extension}`);
  },
});

export default multer({ storage }).single("userImage");
