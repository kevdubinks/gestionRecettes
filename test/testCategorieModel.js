const mongoose = require("mongoose");
const Categorie = require("../models/categoriesModel");
require("dotenv").config({ path: "../.env" });

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
  console.log("Connexion à MongoDB réussie.");
});
// Création d'un exemple de catégorie
const exampleCategorie = new Categorie({
  name: "plat de résistance",
  description: "Catégorie pour les plats de résistances.",
});

// Sauvegarde de la catégorie dans la base de données
exampleCategorie
  .save()
  .then((categorie) => {
    console.log("Catégorie enregistrée avec succès:", categorie);
  })
  .catch((error) => {
    console.error("Erreur lors de l'enregistrement de la catégorie:", error);
  });
