const mongoose = require('mongoose');

// Définissez le schéma de la collection "Communes"
const CommandeSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Nom_du_restaurant: {
    type: String,
    required: true
  },
  Nom_du_plat: {
    type: String,
    required: true
  },
  Prix: {
    type: Number,
    required: true,
  },
});

// Créez le modèle "article" à partir du schéma
const Commande = mongoose.model('Commande', CommandeSchema);

// Exportez le modèle "article"
module.exports = Commande;
