const express = require("express");
const router = express.Router();

router.get("/profil", (req, res) => {
  // Ici, récupérez les informations de l'utilisateur connecté
  // Par exemple, si vous utilisez des sessions :
  // const userInfo = req.session.user;

  // Renvoyez la page de profil avec les informations de l'utilisateur
  res.render("profil", { utilisateur: userInfo }); // Remplacez 'userInfo' par les données réelles de l'utilisateur
});

module.exports = router;
