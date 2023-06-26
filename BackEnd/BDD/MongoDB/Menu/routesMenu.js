const express = require("express");
const menuModel = require("./modelMenu");
const app = express();

app.post("/add_menu", async (request, response) => {
    const menu = new menuModel(request.body);
  
    try {
      await menu.save();
      response.send(menu);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/menus", async (request, response) => {
    const menu = await menuModel.find({});
  
    try {
      response.send(menu);
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
    //&