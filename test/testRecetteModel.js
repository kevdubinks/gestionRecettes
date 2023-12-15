const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const Recette = require("../models/recetteModel"); // Assurez-vous de mettre le bon chemin d'accès au modèle Recette

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connexion à MongoDB réussie.");

    // ID de l'utilisateur (remplacez '657c7576a880e61880535526' par l'ID réel de l'utilisateur)
    const userId = "657c7576a880e61880535526";

    // Ingrédients de la recette
    const ingredients = [
      { name: "Spaghetti", quantity: "500g" },
      { name: "Pancetta", quantity: "100g" },
      { name: "Œufs", quantity: "2" },
      { name: "Parmesan râpé", quantity: "100g" },
      { name: "Poivre noir", quantity: "1/2 cuillère à café" },
      { name: "Sel", quantity: "1/2 cuillère à café" },
    ];

    // Créez un objet Recette avec des données de test, en incluant l'ID de l'utilisateur et les ingrédients
    const recetteTest = new Recette({
      title: "Pâtes à la Carbonara",
      description: "Une recette délicieuse et facile de pâtes à la carbonara.",
      prepTime: 20,
      cookingTime: 15,
      ingredients: ingredients, // Ajout des ingrédients ici
      // Assurez-vous que cet ID existe dans votre base de données pour éviter des erreurs de référence
      user: userId,
    });

    // Enregistrez la recette dans la base de données
    recetteTest
      .save()
      .then((doc) => {
        console.log("Nouvelle recette créée:", doc);
        mongoose.connection.close(); // Fermez la connexion après le test
      })
      .catch((err) => {
        console.error("Erreur lors de la création de la recette:", err);
        mongoose.connection.close(); // Fermez la connexion même en cas d'erreur
      });
  })
  .catch((err) => {
    console.error("Connexion à MongoDB échouée:", err);
  });
