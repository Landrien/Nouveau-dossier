const express = require("express");
const articleModel = require("./modelArticle");
const app = express();

app.post("/add_article", async (request, response) => {
    const article = new articleModel(request.body);
  
    try {
      await article.save();
      response.send(article);
    } catch (error) {
      response.status(500).send(error);
    }
});



app.get("/articles", async (request, response) => {
    const article = await articleModel.find({});
  
    try {
      response.send(article);
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