const express = require("express");
const menuModel = require("./modelMenu");
const Menu = require("./modelMenu");
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

// Route POST pour enregistrer un Menu
app.post('/api/menu', async (req, res) => {
  const menuData = req.body;

  const menu = new Menu(menuData);
  menu.save()
    .then(savedMenu => {
      res.json(savedMenu);
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement du plat', error);
      res.status(500).json({ error: 'Erreur lors de l\'enregistrement du plat' });
    });
});

    module.exports = app;
    //&