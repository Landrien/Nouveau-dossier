const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const RouterCommande = require("./BDD/MongoDB/Commande/routesCommande")
const RouterMenu = require("./BDD/MongoDB/Menu/routesMenu")
const RouterArticle = require("./BDD/MongoDB/Article/routesArticle")

const app = express();

app.use(express.json());

//'mongodb+srv://Hadrien:Qyfus754@cluster13.4mnmz1s.mongodb.net/A4L/'

const username = "Hadrien";
const password = "Qyfus754";
const cluster = "cluster13.4mnmz1s";
const dbname = "Delidash";


//mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connexion à la base de données réussie');
}).catch((error) => {
  console.error('Erreur lors de la connexion à la base de données :', error);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(RouterCommande);
app.use(RouterMenu);
app.use(RouterArticle);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

/*app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !!!!' });
  next();
});*/

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});
//&