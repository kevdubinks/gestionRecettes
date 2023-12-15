const mongoose = require("mongoose");

// Création du schéma pour les ingrédients
const ingredientSchema = new mongoose.Schema({
  // Nom de l'ingrédient
  // Doit être unique pour identifier l'ingrédient
  name: {
    type: String,
    required: true, // Ce champ est obligatoire
    unique: true, // Assure que chaque ingrédient a un nom unique
  },

  // Informations nutritionnelles (optionnelles)
  nutritionInfo: {
    calories: {
      type: Number,
      default: null, // Valeur par défaut à null si non spécifiée
    },
    protein: {
      type: Number,
      default: null,
    },
    fat: {
      type: Number,
      default: null,
    },
    carbohydrates: {
      type: Number,
      default: null,
    },
  },

  // Vous pouvez ajouter ici d'autres champs selon vos besoins
});

// Création du modèle 'Ingredients' à partir du schéma défini
module.exports = mongoose.model("Ingredients", ingredientSchema);
