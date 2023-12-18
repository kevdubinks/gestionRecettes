const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config(); // Charger les variables d'environnement depuis le fichier .env

// Configurer le moteur de modèle si nécessaire
app.set("view engine", "ejs");

// Configurer le middleware pour gérer les données JSON et les formulaires
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurer la connexion à la base de données MongoDB en utilisant la variable d'environnement
mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
  console.log("Connexion à MongoDB réussie.");
});

// Importer et utiliser les fichiers de routes
const inscriptionRoute = require("./routes/inscriptionRoute");
const connexionRoute = require("./routes/connexionRoute");
const profilRoute = require("./routes/profilRoute");

app.use("/", inscriptionRoute); // Les routes d'inscription
app.use("/", connexionRoute); // Les routes de connexion
app.use("/", profilRoute);
// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Une erreur est survenue sur le serveur.");
});

// Démarrer le serveur en utilisant la variable d'environnement PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
