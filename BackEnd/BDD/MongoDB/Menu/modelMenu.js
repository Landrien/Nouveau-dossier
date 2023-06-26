const mongoose = require('mongoose');

// Définissez le schéma de la collection "Communes"
const MenuSchema = new mongoose.Schema({
    Image: {
    type: String,
    required: false
  },
  Nom_du_plat: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true,
  },
  Prix: {
    type: Number,
    required: true,
  },
  Nom_du_restaurant: {
    type: String,
    required: true
  },
});

// Créez le modèle "article" à partir du schéma
const Menu = mongoose.model('Menu', MenuSchema);

// Exportez le modèle "article"
module.exports = Menu;
/*
{
  "Nom_du_restaurant" : " Macarina",
  "Nom_du_plat": "Calzone",
  "Description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  "Prix" : "18"
}*///&