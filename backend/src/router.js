
import express from "express";
import userController from "./controller/userController.js";
const router = express.Router();

// exemple
router.get("/ouvrage/:field/:value");
router.post("/ouvrage");
router.put("/ouvrage/:id");
router.delete("/ouvrage/:id");

// user

router.get("/user") // pour obtenir toute les information des users
router.get("/user/:id")// pour obtenir toute les information d'un user en particulier via son id
router.post("/user/register",userController.register) //pour créer un nouvel utilisateur
router.put("/user/:id") //pour mettre à jour le profil d'un utilisateur en particulier via son id
router.delete("/user/:id") // pour supprimer un user en particulier via son id

//  province
router.get("/province") //pour obtenir la liste complète des provinces, avec leurs informations
router.get("/province/:id") //pour obtenir les informations d'une province en particulier via son id

//admin ?
router.post("/province") //pour créer une nouvelle province
router.delete("/province/:id") //pour supprimer une province en particulier via son id 

//  technology
router.get("/technology") //pour obtenir la liste complète des R&D possibles
router.get("/technology/:id") //pour obtenir une R&D en particulier via son id
router.get("/province/:id/technology") //pour obtenir la liste complète des R&D possibles pour une province //  JOIN avec province à faire
router.get("/province/:id/technology/:id") //pour obtenir une R&D en particulier via son id pour une province //  JOIN avec province à faire


// building
router.get("/province/:id/building/:id")  
router.delete("/province/:id/building/:id") // pour suppimer la bulding //// ID user qui conatcter avec bulding  //  JOIN avec province à faire
router.put("/province/:id/building/:id") //pour mettre à jour le profil de bulding  particulier (// avec plus de details dans la models) //  JOIN avec province à faire


//aliance
router.get("/aliance") // avoir la liste de toutes les alliances disponibles
router.get("/aliance/:id") // avoir les informations d'une alliance en particulier via son id
router.put("/aliance/:id") // modifier les informations d'une alliance en particulier via son id
router.delete("/aliance/:id") // supprimer une alliance en particulier via son id


//period
router.get("/province/:id/period") //avoir l'age d'une province en particulier


//battle
router.get ("/province/:id/battle") // avoit la liste des battle pour une province en particulier 


//inhabitant
router.get("/province/:id/inhabitant") //avoir l'information sur la population d'une province en particulier
router.post("/province/:id/inhabitant") //pour créer un nouvel habitant dans une province en particulier
router.put("/province/:id/inhabitant/:id") //pour modifier un habitant en particulier (role)


export default router;
