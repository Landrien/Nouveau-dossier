const express = require("express");
const commandeModel = require("./modelCommande");
const app = express();

app.post("/add_commande", async (request, response) => {
    const commande = new commandeModel(request.body);
  
    try {
      await commande.save();
      response.send(commande);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/commandes", async (request, response) => {
    const commande = await commandeModel.find({});
  
    try {
      response.send(commande);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get("/communes1", async (request, response) => {
  const communes = await communesModel.find({});

  try {
    response.send(communes);
  } catch (error) {
    response.status(500).send(error);
  }
});

    module.exports = app;