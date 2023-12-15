const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  // URL du média (image, vidéo, etc.)
  url: {
    type: String,
    required: true,
  },

  // Type de média (par exemple, 'image', 'vidéo')
  type: {
    type: String,
    required: true,
  },

  // Description du média (facultatif)
  description: {
    type: String,
  },

  // Date de création du média
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // Lien vers la recette à laquelle ce média est associé
  recette: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recette", // Assurez-vous que la référence correspond au modèle de recette
  },
});

module.exports = mongoose.model("Media", mediaSchema);
