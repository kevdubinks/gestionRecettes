const mongoose = require("mongoose");

// Création du schéma pour les catégories
const categorieSchema = new mongoose.Schema({
  // Nom de la catégorie
  // Doit être unique et est nécessaire pour identifier la catégorie
  name: {
    type: String,
    required: true, // Ce champ est obligatoire
    unique: true, // Assure que chaque nom de catégorie est unique dans la base de données
  },

  // Description de la catégorie
  description: {
    type: String,
    required: true, // Champ obligatoire
  },

  // Date de création de la catégorie
  // Générée automatiquement et utilisée pour des informations d'audit
  createdAt: {
    type: Date,
    default: Date.now, // La date actuelle sera utilisée par défaut
  },
});

// Création du modèle 'Categorie' à partir du schéma défini
module.exports = mongoose.model("Categorie", categorieSchema);
