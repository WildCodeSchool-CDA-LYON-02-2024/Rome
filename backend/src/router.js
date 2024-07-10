import express from "express";
import userController from "./controller/userController.js";
import verifyToken from "./model/service/verifyToken.js";
import technologyController from "./controller/technologyController.js";
import buildingController from "./controller/buildingController.js";
import ressourceController from "./controller/ressourceController.js";
import inhabitantController from "./controller/inhabitantController.js";
import provinceController from "./controller/provinceController.js";
import multerMiddleware from "./middlewares/multerMiddleware.js";

const router = express.Router();

// Example
router.get("/ouvrage/:field/:value");
router.post("/ouvrage");
router.put("/ouvrage/:id");
router.delete("/ouvrage/:id");

// user

router.post("/user/login", userController.login); // pour obtenir toute les information des users
router.get("/user/:id", verifyToken, userController.readById); // pour obtenir toute les information d'un user en particulier via son id
router.post("/user/register",multerMiddleware,  userController.register); //pour créer un nouvel utilisateur
router.put("/user/:id", userController.update); //pour mettre à jour le profil d'un utilisateur en particulier via son id  /// we should use the token here after the test in the dfront end //
router.delete("/user/:id", verifyToken, userController.deleteById); // pour supprimer un user en particulier via son id  // everthing work corrctly

// Province
router.get("/province"); //pour obtenir la liste complète des provinces, avec leurs informations
router.get("/province/:id"); //pour obtenir les informations d'une province en particulier via son id

// Admin ?
router.post("/province"); //pour créer une nouvelle province
router.post("/user/:userId/province",verifyToken,provinceController.addProvinceByUser)// pour créer une province pour un user via son id
router.delete("/province/:id"); //pour supprimer une province en particulier via son id


//  technology
router.get("/technology", technologyController.read); //pour obtenir la liste complète des R&D possibles
router.get("/technology/:id", technologyController.readById); //pour obtenir une R&D en particulier via son id
router.get("/province/:id/technology", technologyController.readByProvince); //pour obtenir la liste complète des R&D possibles pour une province //  JOIN avec province à faire
router.post("/technology/:id", technologyController.add); //pour ajouter une R&D à une province en particulier//  JOIN avec province à faire

// Building
router.post("/province/:provinceId/building/:buildingId/construct"); // TODO: add buildingController.constructBuilding
router.get(
  "/province/:provinceId/building",
  buildingController.getBuildingsByProvince,
); // get all buildings in a province
router.get(
  "/province/:provinceId/building/:buildingId",
  buildingController.getBuildingById,
); // get specific building by ID
router.put(
  "/province/:provinceId/building/:buildingId",
  buildingController.updateBuilding,
); // update a specific building by ID
router.delete(
  "/province/:provinceId/building/:buildingId",
  buildingController.deleteBuilding,
); // delete specific building by ID

// Alliance
router.get("/alliance"); // avoir la liste de toutes les alliances disponibles
router.get("/alliance/:id"); // avoir les informations d'une alliance en particulier via son id
router.put("/alliance/:id"); // modifier les informations d'une alliance en particulier via son id
router.delete("/alliance/:id"); // supprimer une alliance en particulier via son id

// Period
router.get("/province/:id/period"); //avoir l'age d'une province en particulier

// Battle
router.get("/province/:id/battle"); // avoit la liste des battle pour une province en particulier

// Inhabitant
router.get(
  "/province/:id/inhabitant",
  inhabitantController.getInhabitantByProvinceId,
); //avoir l'information sur la population d'une province en particulier
router.get("/users/:user_id/provinces/:province_id/inhabitants",verifyToken, inhabitantController.getAllInhabitantsByProvinceIdAndUserId);//pour avoir la liste de tous les habitants d'une province associée à un joueur spécifique/users/:user_id/provinces/:province_id/inhabitants',verifyToken, inhabitantController.getAllInhabitantsByProvinceIdAndUserId);//pour avoir la liste de tous les habitants d'une province associée à un joueur spécifique
router.post("/province/:id/inhabitant"); //pour créer un nouvel habitant dans une province en particulier
router.put("/province/:id/inhabitant/:id"); //pour modifier un habitant en particulier (role)

// Ressource
router.get("/ressource", ressourceController.read); //pour obtenir la liste des ressources en général
router.get("/ressource/:id", ressourceController.readById); //pour obtenir les informations d'une ressource en particulier
router.get("/province/:id/ressource", ressourceController.readByProvince); //avoir l'information sur les ressources d'une province en particulier
router.put("/province/:id/ressource", ressourceController.update); //pour modifier une ressource d'une en particulier (role)

export default router;
