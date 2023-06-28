const mysql = require('mysql');
const app = express(); 
const port = process.env.PORT || 3006


const connection = mysql.createConnection({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7629107',
    password: 'ciSjNH2Ztz',
    database: 'sql7629107'
  });


app.listen(port, () => {
    console.log("Serveur est en ligne");
})

  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
      return;
    }
    console.log('Connexion à la base de données réussie !');
  });

  connection.query('SELECT * FROM User', (err, rows) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return;
    }
    console.log('Résultat de la requête :', rows);
  });

  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion :', err);
      return;
    }
    console.log('Connexion à la base de données fermée.');
  });