// Importation du module mongoose
const mongoose = require("mongoose");

// Définition du schéma Mongoose pour les commentaires
const commentaireSchema = new mongoose.Schema({
  // Contenu du commentaire
  content: {
    type: String,
    required: true, // Le contenu du commentaire est obligatoire
  },

  // Date de création du commentaire
  createdAt: {
    type: Date,
    default: Date.now, // La date actuelle sera utilisée par défaut
  },

  // Référence vers l'utilisateur qui a créé le commentaire
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Fait référence au modèle User
  },

  // Référence vers la recette associée au commentaire
  recette: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recette", // Fait référence au modèle Recette
  },
});

// Création du modèle 'Commentaire' à partir du schéma défini
module.exports = mongoose.model("Commentaire", commentaireSchema);
