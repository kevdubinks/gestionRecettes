const Recette = require("../models/recetteModel"); // Assurez-vous que le chemin est correct

// Contrôleur pour obtenir toutes les recettes
exports.getAllRecettes = async (req, res) => {
  try {
    const recettes = await Recette.find().populate("user");
    res.render("recettes", { recettes }); // Rendu d'une vue EJS avec les recettes
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des recettes");
  }
};

// Contrôleur pour obtenir une recette par son ID
exports.getRecetteById = async (req, res) => {
  try {
    const recette = await Recette.findById(req.params.id);
    res.render("recetteDetail", { recette }); // Rendu d'une vue EJS pour afficher les détails d'une recette
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération de la recette");
  }
};

// Ajoutez d'autres contrôleurs pour créer, mettre à jour, supprimer des recettes si nécessaire
// Contrôleur pour créer une nouvelle recette
exports.createRecette = async (req, res) => {
  try {
    let nouvelleRecette = new Recette({
      title: req.body.title,
      description: req.body.description,
      prepTime: req.body.prepTime,
      cookingTime: req.body.cookingTime,
      ingredients: req.body.ingredients,

      // ... et les autres champs selon votre schéma de recette
    });

    await nouvelleRecette.save();
    res.redirect("/recettes"); // Ou peut-être rediriger vers la page de la recette créée
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la création de la recette.");
  }
};

// Contrôleur pour supprimer une recette
exports.deleteRecette = async (req, res) => {
  try {
    await Recette.findByIdAndDelete(req.params.id);
    res.redirect("/recettes");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la suppression de la recette.");
  }
};
