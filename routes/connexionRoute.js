const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Utilisateur = require("../models/userModel");

// Middleware pour vérifier si l'utilisateur est connecté
function estConnecte(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/connexion");
  }
}

// Affichage de la page de connexion
router.get("/connexion", (req, res) => {
  res.render("connexion", { erreur: req.session.erreur });
  delete req.session.erreur; // Effacer le message d'erreur après l'affichage
});

// Traitement du formulaire de connexion
router.post("/connexion", async (req, res) => {
  const { email, password } = req.body;

  // Recherche de l'utilisateur par adresse e-mail
  const utilisateur = await Utilisateur.findOne({ email });

  // Vérification du mot de passe
  if (!utilisateur || !(await bcrypt.compare(password, utilisateur.password))) {
    req.session.erreur = "Adresse e-mail ou mot de passe incorrect.";
    return res.redirect("/connexion");
  }

  // Stocker les informations de l'utilisateur dans la session
  // Ne stockez pas le mot de passe haché pour des raisons de sécurité
  req.session.user = {
    id: utilisateur._id,
    username: utilisateur.username,
    email: utilisateur.email,
  };

  // Authentification réussie, rediriger vers la page de profil
  res.redirect("/profil");
});

// Route de profil (protégée)
router.get("/profil", estConnecte, (req, res) => {
  res.render("profil", { utilisateur: req.session.user });
});

module.exports = router;
