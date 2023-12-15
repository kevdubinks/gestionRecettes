const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Utilisateur = require("../models/userModel");

// Affichage de la page d'inscription
router.get("/inscription", (req, res) => {
  res.render("inscription"); // Utilisez le moteur de modèle approprié ici
});

// Traitement du formulaire d'inscription
router.post("/inscription", async (req, res) => {
  const { nom, email, motDePasse } = req.body;

  // Vérification si l'adresse e-mail est déjà utilisée
  const utilisateurExistant = await Utilisateur.findOne({ email });
  if (utilisateurExistant) {
    return res
      .status(400)
      .json({ message: "Cette adresse e-mail est déjà utilisée." });
  }

  // Hachage du mot de passe
  const motDePasseHache = await bcrypt.hash(motDePasse, 10);

  // Création d'un nouvel utilisateur dans la base de données
  const nouvelUtilisateur = new Utilisateur({
    nom,
    email,
    motDePasse: motDePasseHache,
  });

  try {
    await nouvelUtilisateur.save();
    res.redirect("/connexion"); // Redirection vers la page de connexion après l'inscription réussie
  } catch (erreur) {
    console.error(erreur);
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de l'inscription." });
  }
});

module.exports = router;
