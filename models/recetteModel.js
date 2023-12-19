const mongoose = require("mongoose");

// Si vous avez un modèle ingrédient séparé, vous pouvez utiliser la référence à celui-ci ici
// const IngredientSchema = require('./ingredientModel').schema;

const recetteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Le titre de la recette est obligatoire"],
      trim: true, // Supprime les espaces blancs au début et à la fin
    },
    description: {
      type: String,
      required: [true, "Une description est nécessaire"],
    },
    prepTime: {
      type: Number, // Peut aussi être une chaîne si vous incluez des unités (par exemple, '20 minutes')
      required: [true, "Le temps de préparation est requis"],
    },
    cookingTime: {
      type: Number, // De même, peut être une chaîne de caractères
      required: [true, "Le temps de cuisson est requis"],
    },
    ingredients: [
      {
        // Ceci est un tableau d'objets pour les ingrédients
        name: String,
        quantity: String,
        // Vous pouvez ajouter une référence à un ingrédient si vous avez une collection séparée
        // ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }
      },
    ],
    categories: [
      {
        // Cela pourrait être un tableau de catégories si une recette peut en avoir plusieurs
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie", // Référence à votre modèle de catégorie
      },
    ],
    user: {
      // L'utilisateur qui a créé la recette
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Référence à votre modèle utilisateur
      required: false,
    },
    // Ajoutez plus de champs selon vos besoins...
  },
  {
    timestamps: true, // Crée automatiquement les champs 'createdAt' et 'updatedAt'
  }
);

// Création du modèle 'Recette' à partir du schéma défini
module.exports = mongoose.model("Recette", recetteSchema);
