// Nom du script : express_01.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Serveur express_01.js pour affichage
//         du script HTML client_express_01.htm

// Appel de la bibliothèque Node.js express
// (express est un framework extension de Node js)
var express = require("express");

// Création d'une instance de serveur Express js
var serveur = express();

// Affichage du script client_express_01.htm
// se trouvant dans le même répertoire que le serveur Express js
// NB : L'adresse dans l'URL peut donc être différente
//      du fichier physique affiché.
serveur.get("/express_01", function(request, response) {
  // Affichage dans le navigateur (htpp://127.0.0.1:8080/express_01)
  // du script client_express_01.htm 
  // NB : __dirname représente la racine du serveur Express js
  response.sendFile(__dirname + "/client_express_01.htm");    
});

// Mise en écoute du serveur Express js sur le port 8080
serveur.listen(8080, function() {
  // Message en mode console annonçant le fonctionnement du serveur Express js
  // sur le port 8080
  console.log("Serveur Express js (express_01.js) démarré sur le port 8080");
});