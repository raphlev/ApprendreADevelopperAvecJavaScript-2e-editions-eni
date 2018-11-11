// Nom du script : express_07.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Serveur express_07.js récupérant des champs
//         transmis par le script HTML client_express_07.hbs via la méthode post
//         et les stockant dans la collection voitures2 de la Base De Données
//         Mongo DB voitures_sport

// Appel de la bibliothèque Node.js express
// (express est un framework extension de Node js)
var express = require("express");

// Création d'une instance de serveur Node js basée sur express
var serveur = express();

// Appel de la bibliothèque Express.js body-parser
// NB : Il s'agit d'un parser capable de répérer
//      les champs transmis par le script client (marque, modele et pays)
var bodyParser = require("body-parser");

// Utilisation de "body-parser" sur le serveur Express js
// NB1 : Type de transfert de contenu depuis le client
//       (parsage d'un body urlencoded)
// NB2 : The extended option allows to choose between
//       parsing the URL-encoded data with the querystring library (when false)
//       or the qs library (when true).
serveur.use(bodyParser.urlencoded({extended: true}));

// Définition du répertoire contenant les vues (views)
// NB : __dirname représente le repertoire racine du serveur Express js
serveur.set("views", __dirname+"/views");

// Définition du moteur de templates handlebars
// NB : Avec ce paramétrage, il ne sera plus obligatoire de signaler le suffixe
//      .hbs à la fin des vues
serveur.set("view engine", "hbs");

// Appel de la bibliothèque Node.js mongoose
// en vue d'un accès au serveur Mongo DB
var mongoose = require("mongoose");

// URL de connexion à la BDD Mongo DB voitures_sport
var url_mongo = "mongodb://localhost:27017/voitures_sport";

// Affichage d'un fichier client_express_07.hbs
// pour la saisie des données (URL : http://127.0.0.1:8080/express_07)
// NB1 : Les fichiers .hbs sont des fichiers liés au moteur de templates
//       nommé handlebars.
// NB2 : Les fichiers .hbs sont stockés dans le répertoire views.
serveur.get("/express_07", function(req, res) {
  res.render("client_express_07");
  // ou res.render("client_express_07.hbs");
});

// Récupération des valeurs de champs du formulaire formulaire_express_07.hbs
serveur.post("/express_07", function(req, res) {

  // Affichage de l'objet body en mode console
  console.log(req.body);

  // Récupération des données reçues dans des variables mémoire
  var marque = req.body.marque;
  var modele = req.body.modele;
  var pays = req.body.pays;

  // Connexion à la BDD Mongo DB voitures_sport
  mongoose.connect(url_mongo, function(erreur_connexion) {

    // Cas d'erreur
    if (erreur_connexion) {

      // Affichage d'un message d'erreur en mode console
      console.log("Echec de connexion au serveur Mongo DB : ", erreur_connexion);

    }
    else {

      // Connexion réussie
      console.log("Connexion réussie au serveur Mongo DB : ", url_mongo);

      //
      // Insertion d'un enregistrement (objet/document)
      // dans la collection voitures2
      // NB : Attention, pas de contrôle de doublons
      //

      // Création du schéma de la collection
      var voituresSchema = new mongoose.Schema({
        marque: {type: String },
        modele: {type: String },
        pays: {type: String}
      });

      // Création de la collection voitures_mongoose
      // NB : Le nom de la collection est voitures2 pour éviter
      //      les interférences avec la collection antérieure voitures
      var voituresModel = mongoose.model("voitures2", voituresSchema);

      // Création d'une nouvelle instance de voiture
      var maVoiture = new voituresModel({marque: marque, modele: modele,
                                         pays: pays});

      // Insertion de l'objet maVoiture dans la collection voitures2
      maVoiture.save(function (err) {
        if (err) { throw err; }
          // Affichage d'un message de contrôle en mode console
          console.log("Insertion réussie");
          // Fermeture de la connexion Mongo DB
          mongoose.connection.close();
      });

    };

    // Réponse fournie au formulaire confirmation_express_07.hbs
    // res.render(__dirname + "/views/" + "confirmation_express_07.hbs",
    // {marque: marque, modele: modele, pays: pays});
    res.render("confirmation_express_07",
    {marque: marque, modele: modele, pays: pays});

  });
  
});

// Mise en écoute du serveur Express js sur le port 8080
serveur.listen(8080, function() {
  // Message en mode console annonçant le fonctionnement du serveur Express js
  // sur le port 8080
  console.log("Serveur Express js (express_07.js) démarré sur le port 8080");
});