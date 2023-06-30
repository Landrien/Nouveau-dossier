const http = require('http');
const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: 'sql7.freemysqlhosting.net', // L'hôte de la base de données
    user: 'sql7629107', // Votre nom d'utilisateur MySQL
    password: 'ciSjNH2Ztz', // Votre mot de passe MySQL
    database: 'sql7629107' // Le nom de votre base de données
  });
  
  connection.connect((error) => {
    if (error) {
      console.error('Erreur de connexion à la base de données:', error);
    } else {
      console.log('Connecté à la base de données MySQL');
    }
  });


app.get('/', function(req, res){
  res.send('Welcome to our API');
});
const cookieOptions = {
  httpOnly: true, // Empêcher l'accès au cookie via JavaScript côté client
  maxAge: 24 * 60 * 60 * 1000, // Durée de validité du cookie (1 jour ici)
};


app.post("/register", async (req, resp) => {
  try {
    const ACCESS_TOKEN_SECRET='33c34771a56cf5bc23a1a85a170a1222ad5201147eb698d5976b29e32938526720f8acbb3a9ef8bbc0c7fb478812045a0ae95a01a905c11c318eab7eb048cd66';
    const tab = Object.values(req.body);
    var tabQuery = [tab];
    const sql = `INSERT INTO User (Prénom, Nom, Email, Password) VALUES ?`;
    connection.query(sql, [tabQuery], (error, results) => {
    if (error) {
        console.error('Erreur lors de l\'insertion des données:', error);
        resp.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
    } else if(results) {
        console.log(results)
        var token = jwt.sign(req.body, ACCESS_TOKEN_SECRET,{expiresIn: 60*60*24});
        let bearer = token.replace('Bearer ', '');
        const cookieValue = cookie.serialize('jwt', bearer, cookieOptions);
        resp.setHeader('Set-Cookie', cookieValue);
        resp.send(cookieValue);
    }
    });
  } catch (e) {
      resp.send(e);
  }
});

app.post("/login", async (req, resp) => {
  const ACCESS_TOKEN_SECRET='33c34771a56cf5bc23a1a85a170a1222ad5201147eb698d5976b29e32938526720f8acbb3a9ef8bbc0c7fb478812045a0ae95a01a905c11c318eab7eb048cd66';
  const jwtToken = req.headers.cookie;
  let bearer = jwtToken.replace('jwt=', '');
  const decodedToken = jwt.verify(bearer, ACCESS_TOKEN_SECRET);
  try{
    const sql = `SELECT Email,Password FROM User WHERE Email = ? AND Password = ?`;
    connection.query(sql, [req.body.email, req.body.password], (error, results) => {
    if (error) {
        console.error('Erreur lors de l\'insertion des données:', error);
        resp.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
    } else if(results) {
        console.log(results)
        resp.send(decodedToken);
    }
    });
  } catch (e) {
    resp.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

/*app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !!!!' });
  next();
});*/


//&