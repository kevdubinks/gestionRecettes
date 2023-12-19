const express = require("express");
const router = express.Router();
const recetteControllers = require("../controller/recettecontroller.js"); // Assurez-vous que le chemin est correct

// Route pour obtenir toutes les recettes
router.get("/recettes", recetteControllers.getAllRecettes);

// Vous pouvez ajouter d'autres routes de recette ici
// Par exemple, pour obtenir une recette par son ID
router.get("/recettes/:id", recetteControllers.getRecetteById);

// Exportez le routeur pour l'utiliser dans votre application principale
router.post("/recettes", recetteControllers.createRecette);
router.delete("/recettes/:id", recetteControllers.deleteRecette); // Utilisation de la méthode DELETE

module.exports = router;
