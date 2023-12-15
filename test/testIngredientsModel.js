const mongoose = require("mongoose");
const Ingredients = require("../models/ingredientsModel");
require("dotenv").config({ path: "../.env" });

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
  console.log("Connexion à MongoDB réussie.");
});

// Création d'un exemple d'ingrédient
const exampleIngredient = new Ingredients({
  name: "Farine", // Nom de l'ingrédient
  category: "Céréales", // Catégorie de l'ingrédient (vous pouvez ajuster la catégorie selon vos besoins)
  nutritionalInfo: {
    calories: 100, // Valeurs nutritionnelles de l'ingrédient (ajustez selon les données réelles)
    protein: 2,
    fat: 1,
    carbohydrates: 22,
  },
});

// Sauvegarde de l'ingrédient dans la base de données
exampleIngredient
  .save()
  .then((ingredient) => {
    console.log("Ingrédient enregistré avec succès:", ingredient);
  })
  .catch((error) => {
    console.error("Erreur lors de l'enregistrement de l'ingrédient:", error);
  });
