
import express from "express";
const router = express.Router();

// exemple
router.get("/ouvrage/:field/:value");
router.post("/ouvrage");
router.put("/ouvrage/:id");
router.delete("/ouvrage/:id");

// user

router.get("/user") // pour obtenir toute les information des users
router.get("/user/:id")// pour obtenir toute les information d'un user en particulier via son id
router.post("/user") //pour créer un nouvel utilisateur
router.put("/user/:id") //pour mettre à jour le profil d'un utilisateur en particulier
router.delete("/user/:id") // pour supprimer un user en particulier



//  technology
router.get("/technology") //pour obtenir la liste complète des R&D possibles
router.get("/technology/id") //pour obtenir une R&D en particulier via son id
router.get("/province/:id/technology") //pour obtenir la liste complète des R&D possibles pour une province
router.get("/province/:id//technology/id") //pour obtenir une R&D en particulier via son id pour une province


// building
router.get("/province/:id/building/:id")   
router.delete("/province/:id/building/:id") // pour suppimer la bulding //// ID user qui conatcter avec bulding 
router.put("/province/:id/building/:id") //pour mettre à jour le profil de bulding  particulier (// avec plus de details dans la models)


//aliance
router.get("/aliance") // avoir la liste de toutes les alliances disponibles
router.get("/aliance/:id") // avoir la liste d'une alliance en particulier via son id
router.put("/aliance/:id") // modifier les information d'une alliance en particulier via son id
router.delete("/aliance/:id") // supprimer une alliance en particulier via son id


//period
router.get("/province/:id/period") //avoir l'age d'une province en particulier


//battlle



