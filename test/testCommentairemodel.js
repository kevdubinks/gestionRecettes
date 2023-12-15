require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Commentaire = require("../models/commentaireModel"); // Assurez-vous d'ajuster le chemin du modèle en fonction de votre structure de dossiers
mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
  console.log("Connexion à MongoDB réussie.");
});
const exampleCommentaire = new Commentaire({
  content: "Ceci est un commentaire de test.",
  user: "657c7576a880e61880535526", // Remplacez par l'ID de l'utilisateur réel
  recette: "657c7b84ee3a40babc0a3bca", // Remplacez par l'ID de la recette réelle
});

// Sauvegarde du commentaire dans la base de données
exampleCommentaire
  .save()
  .then((commentaire) => {
    console.log("Commentaire enregistré avec succès:", commentaire);
  })
  .catch((error) => {
    console.error("Erreur lors de l'enregistrement du commentaire:", error);
  });
