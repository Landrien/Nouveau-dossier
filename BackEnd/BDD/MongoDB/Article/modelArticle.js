const mongoose = require('mongoose');

// Définissez le schéma de la collection "Communes"
const ArticleSchema = new mongoose.Schema({
    Image: {
    type: String,
    required: false
  },
  Nom_restaurant: {
    type: String,
    required: true
  },
  Note: {
    type: Number,
    default: 0,
  }
});

// Créez le modèle "article" à partir du schéma
const Article = mongoose.model('Article', ArticleSchema);

// Exportez le modèle "article"
module.exports = Article;
