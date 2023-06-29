const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const Router = require("./routesMenu")
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const app = express();

app.use(express.json());

//'mongodb+srv://Hadrien:Qyfus754@cluster13.4mnmz1s.mongodb.net/A4L/'

// const username = "Hadrien";
// const password = "Qyfus754";
// const cluster = "cluster13.4mnmz1s";
// const dbname = "Delidash";

mongoose.connect(`mongodb://127.0.0.1:27017/Clients`,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connexion à la bdd Clients réussie');
}).catch((error) => {
  console.error('Erreur lors de la connexion:', error);
});

const UserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  date: {
      type: Date,
      default: Date.now,
  },
  password: {
      type: String,
      required: true,
      unique: true,
  },
});

const User = mongoose.model('Test-Client-Database', UserSchema);
User.createIndexes();

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
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();   
      var token = jwt.sign(result, ACCESS_TOKEN_SECRET,{expiresIn: 60*60*24});
      let bearer = token.replace('Bearer ', '');
      const cookieValue = cookie.serialize('jwt', bearer, cookieOptions);
      if (result) {
        resp.setHeader('Set-Cookie', cookieValue);
        resp.send(cookieValue);
      } else {
          console.log("User already register");
      }
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
    const result = await User.findOne(req.body);  
    // Comparez les données récupérées avec les données du formulaire
    if (result) {
      // Les données correspondent
      console.log(decodedToken);
      resp.status(200).json(decodedToken);
    } else {
      // Les données ne correspondent pas
      resp.status(404).json({ message: 'Les données ne correspondent pas' });
    }
  } catch (e) {
    resp.status(500).send(e);
  }
});
//mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority
// mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`,
//  {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connexion à la base de données réussie');
// }).catch((error) => {
//   console.error('Erreur lors de la connexion à la base de données :', error);
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

/*app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !!!!' });
  next();
});*/


//&