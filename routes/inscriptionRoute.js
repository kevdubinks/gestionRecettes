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
  const { username, email, password } = req.body; // Utilisez les noms de champs corrects

  // Vérification si l'adresse e-mail est déjà utilisée
  const utilisateurExistantEmail = await Utilisateur.findOne({ email });
  const utilisateurExistantUsername = await Utilisateur.findOne({ username });

  if (utilisateurExistantEmail) {
    return res
      .status(400)
      .json({ message: "Cette adresse e-mail est déjà utilisée." });
  }

  if (utilisateurExistantUsername) {
    return res
      .status(400)
      .json({ message: "Ce nom d'utilisateur est déjà utilisé." });
  }

  // Hachage du mot de passe

  const saltRounds = 10; // Nombre de tours de hachage
  const motDePasseHache = await bcrypt.hash(password, saltRounds); // Utilisation du bon champ

  // Création d'un nouvel utilisateur dans la base de données
  const nouvelUtilisateur = new Utilisateur({
    username, // Utilisation du bon champ
    email,
    password: motDePasseHache, // Utilisation du bon champ
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
