const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Utilisateur = require("../models/userModel");

// Affichage de la page de connexion
router.get("/connexion", (req, res) => {
  res.render("connexion"); // Utilisez le moteur de modèle approprié ici
});

// Traitement du formulaire de connexion
router.post("/connexion", async (req, res) => {
  const { email, password } = req.body;

  // Recherche de l'utilisateur par adresse e-mail
  const utilisateur = await Utilisateur.findOne({ email });

  // Vérification du mot de passe
  if (!utilisateur || !(await bcrypt.compare(password, utilisateur.password))) {
    return res
      .status(401)
      .json({ message: "Adresse e-mail ou mot de passe incorrect." });
  }

  // Authentification réussie, rediriger l'utilisateur vers sa page de profil ou autre
  res.redirect("/profil"); // Redirigez vers la page de profil
});

module.exports = router;
