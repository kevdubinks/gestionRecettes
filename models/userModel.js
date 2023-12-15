const mongoose = require("mongoose");

// Création du schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
  // Nom d'utilisateur
  // Doit être unique et est nécessaire pour identifier l'utilisateur
  username: {
    type: String,
    required: true, // Ce champ est obligatoire
    unique: true, // Assure que chaque nom d'utilisateur est unique dans la base de données
  },

  // Adresse e-mail
  // Utilisé pour l'authentification et la communication, doit être unique
  email: {
    type: String,
    required: true, // Champ obligatoire
    unique: true, // Chaque adresse e-mail doit être unique
    match: [/.+\@.+\..+/, "Veuillez entrer une adresse e-mail valide"], // Vérification du format de l'e-mail
  },

  // Mot de passe
  // Nécessaire pour la sécurité et l'authentification de l'utilisateur
  password: {
    type: String,
    required: true, // Champ obligatoire
  },

  // Date de création de l'utilisateur
  // Générée automatiquement et utilisée pour des informations d'audit
  createdAt: {
    type: Date,
    default: Date.now, // La date actuelle sera utilisée par défaut
  },

  // Vous pouvez ajouter ici d'autres champs selon vos besoins
});

// Création du modèle 'User' à partir du schéma défini
module.exports = mongoose.model("User", userSchema);
