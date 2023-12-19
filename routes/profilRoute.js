const express = require("express");
const router = express.Router();

router.get("/profil", (req, res) => {
  // Assurez-vous que la propriété 'user' dans la session est correcte
  const userInfo = req.session.user;
  if (!userInfo) {
    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    return res.redirect("/connexion");
  }

  // Si l'utilisateur est connecté, affichez sa page de profil
  // Passez l'objet utilisateur entier à la vue
  res.render("profil", { utilisateur: userInfo });
});

module.exports = router;
