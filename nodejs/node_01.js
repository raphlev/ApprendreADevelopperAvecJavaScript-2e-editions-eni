// Nom du script : node_01.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Un simple "Hello World"

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {
  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  resultat.writeHead(200);
  // Message envoyé à l'utilisateur
  resultat.end("Hello World");
}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);
