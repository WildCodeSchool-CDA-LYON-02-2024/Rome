import express from "express";
import technologyController from "./controller/technologyController.js";
import buildingController from "./controller/buildingController.js";

const router = express.Router();

// Example
router.get("/ouvrage/:field/:value");
router.post("/ouvrage");
router.put("/ouvrage/:id");
router.delete("/ouvrage/:id");

// User
router.get("/user"); // pour obtenir toute les information des users
router.get("/user/:id"); // pour obtenir toute les information d'un user en particulier via son id
router.post("/user"); //pour créer un nouvel utilisateur
router.put("/user/:id"); //pour mettre à jour le profil d'un utilisateur en particulier via son id
router.delete("/user/:id"); // pour supprimer un user en particulier via son id

// Province
router.get("/province"); //pour obtenir la liste complète des provinces, avec leurs informations
router.get("/province/:id"); //pour obtenir les informations d'une province en particulier via son id

// Admin ?
router.post("/province"); //pour créer une nouvelle province
router.delete("/province/:id"); //pour supprimer une province en particulier via son id

//  technology
router.get("/technology", technologyController.read) //pour obtenir la liste complète des R&D possibles
router.get("/technology/:id", technologyController.readById) //pour obtenir une R&D en particulier via son id
router.get("/province/:id/technology", technologyController.readByProvince) //pour obtenir la liste complète des R&D possibles pour une province //  JOIN avec province à faire
router.post("/technology/:id", technologyController.add) //pour ajouter une R&D à une province en particulier//  JOIN avec province à faire


// Building
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
router.get("/province/:id/inhabitant"); //avoir l'information sur la population d'une province en particulier
router.post("/province/:id/inhabitant"); //pour créer un nouvel habitant dans une province en particulier
router.put("/province/:id/inhabitant/:id"); //pour modifier un habitant en particulier (role)

export default router;
