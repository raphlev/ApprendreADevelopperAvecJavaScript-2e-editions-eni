// Nom du script : express_02.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Serveur express_02.js pour affichage de champs transmis
//         par le script HTML client_express_02.htm via la méthode post

// Appel de la bibliothèque Node.js express
// (express est un framework extension de Node js)
var express = require("express");

// Création d'une instance de serveur Express js basée sur express
var serveur = express();

// Appel de la bibliothèque Express.js body-parser
// NB : Il s'agit d'un parser capable de répérer
//      les champs transmis par le script client (marque, modele et pays)
var bodyParser = require("body-parser");

// Utilisation de "body-parser" sur le serveur Express js
// NB1 : Type de transfert de contenu depuis le client
//       (parsage d'un body urlencoded)
// NB2 : The extended option allows to choose between parsing
//       the URL-encoded data with the querystring library (when false)
//       or the qs library (when true).
serveur.use(bodyParser.urlencoded({extended: true}));

// Affichage du script client_express_02.htm
// se trouvant dans le même répertoire que le serveur Express js
// NB : L'adresse dans l'URL peut donc être différente
//      du fichier physique affiché.
serveur.get("/client_express_02", function(request, response) {
  // Affichage dans le navigateur (htpp://127.0.0.1:8080/client_express_02)
  // du script client_express_02.htm 
  // NB : __dirname représente la racine du serveur Express js
  response.sendFile(__dirname + "/client_express_02.htm");    
});

// Récupération des valeurs de champs transmises par le formulaire
// du script client_express_02.htm
// (se trouvant dans le même répertoire que le serveur Express js)
// NB : Utilisation de la méthode post
serveur.post("/express_02", function(request, response) {

  // Récupération des champs marque, modele et pays
  var marque = request.body.marque; 
  var modele = request.body.modele; 
  var pays = request.body.pays; 

  // Affichages de contrôle en mode console
  console.log("Marque : " + marque);
  console.log("Modèle : " + modele);
  console.log("Pays : " + pays);
    
  // Définition de la variable à afficher dans le navigateur
  var affichageHTML = "<!DOCTYPE html><html><head><meta charset='utf-8' />";
  affichageHTML = affichageHTML + "<title>express_02.js</title></head><body>";

  // Préparation du message à afficher en mode HTML
  affichageHTML = affichageHTML + "<font face='Arial'>";
  affichageHTML = affichageHTML + "Marque : " + marque + "<br />"; 
  affichageHTML = affichageHTML + "Modèle : " + modele + "<br />"; 
  affichageHTML = affichageHTML + "Pays : " + pays + "<br />";   
  affichageHTML = affichageHTML + "</font></body></html>";

  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  response.writeHead(200);

  // Envoi de la variable affichageHTML au navigateur 
  response.end(affichageHTML);

});

// Mise en écoute du serveur Express js sur le port 8080
serveur.listen(8080);

// Message en mode console annonçant le fonctionnement du serveur Express js
// sur le port 8080
console.log("Serveur Express js (express_02.js) démarré sur le port 8080");