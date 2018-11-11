// Nom du script : express_05.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Connexion à un serveur Mongo DB
//         avec listage des objets d'une collection

// Appel de la bibliothèque Node.js express
// (express est un framework extension de Node js)
var express = require("express");

// Création d'une instance de serveur Node js basée sur express
var serveur = express();

// Définition du répertoire contenant les vues (views)
// NB : __dirname représente le repertoire racine du serveur Express js
serveur.set("views", __dirname+"/views");

// Définition du moteur de templates
// (handlebars avec extension hbs dans notre cas)
// NB : Il ne sera plus obligatoire de signaler le suffixe .hbs à la fin des vues
serveur.set("view engine", "hbs");

// Appel de la bibliothèque Node.js mongodb en vue d'un accès au serveur Mongo DB
var mongodb = require("mongodb");

// Création d'une instance de connexion à un serveur Mongo DB
var MongoClient = mongodb.MongoClient;

// URL de connexion à la BDD Mongo DB voitures_sport
var url_mongo = "mongodb://localhost:27017/voitures_sport";

// Affichage d'un fichier liste_express_05.hbs
// sur l'URL http://127.0.0.1:8080/express_05)
// NB1 : Les fichiers .hbs sont des documents HTML
//       stockés dans le répertoire views.
// NB2 : Les fichiers .hbs sont des fichiers liés au moteur de templates
//       nommé handlebars
//       qui sera utilisé ultérieurement pour y mettre des paramètres.
serveur.get("/express_05", function(req, res) {

  // Connexion à la BDD Mongo DB voitures_sport
  MongoClient.connect(url_mongo, function (erreur_connexion, bdd_mongo) {

    // Cas d'erreur
    if (erreur_connexion) {

      // Affichage d'un message d'erreur en mode console
      console.log("Echec de connexion au serveur Mongo DB : ", erreur_connexion);
  
    } else {

      // Connexion réussie
      console.log("Connexion réussie au serveur Mongo DB : ", url_mongo);

      // Listage des objets de la collection voitures
      var voitures = bdd_mongo.collection("voitures");
      voitures.find({pays: 'Allemagne'})
      .toArray(function (err, voituresSelectionnes) {
        if (err) {
          // Affichage d'un message d'erreur en mode console
          console.log(err);
        }
        else {

          // Affichage de la liste des voitures sélectionnées en mode console
          console.log("Voitures trouvées : ", voituresSelectionnes);

          // Envoi dans le fichier liste_express_05.hbs
          res.render("liste_express_05", {"voitures": voituresSelectionnes});

        };

      });
        
      // Fermeture de la connexion Mongo DB
      bdd_mongo.close();

    }

  });

});

// Mise en écoute du serveur Express js sur le port 8080
serveur.listen(8080, function() {
  // Message en mode console annonçant le fonctionnement du serveur Express js
  // sur le port 8080
  console.log("Serveur Express js (express_05.js) démarré sur le port 8080");
});