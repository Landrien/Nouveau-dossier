const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const Router = require("./routesArticle")


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

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

/*app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !!!!' });
  next();
});*/

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});
//&