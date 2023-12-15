const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const User = require("../models/userModel"); // Assurez-vous que le chemin d'accès est correct

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connexion à MongoDB réussie pour le test."))
  .catch((err) =>
    console.error("Connexion à MongoDB échouée pour le test:", err)
  );

const testUser = new User({
  username: "testUser",
  email: "test@example.com",
  password: "password123",
});

testUser
  .save()
  .then((doc) => {
    console.log("Nouvel utilisateur créé:", doc);
    mongoose.connection.close(); // Ferme la connexion après le test
  })
  .catch((err) => {
    console.error("Erreur lors de la création de l’utilisateur:", err);
    mongoose.connection.close(); // Ferme la connexion même en cas d'erreur
  });
