// Nom du script : node_07.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Création d'un objet avec son propre événement

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Appel de la classe Node.js EventEmitter du module events 
var EventEmitter = require("events").EventEmitter;

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {
  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  resultat.writeHead(200);
  // Message envoyé à l'utilisateur
  resultat.end("Serveur en fonctionnement");
}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);

// Création d'un objet porsche911 basé sur la classe EventEmitter
var porsche911 = new EventEmitter();

// Définition d'un événement arrivee associé à l'objet porsche911
porsche911.on("arrivee", function(message) {
  console.log(message);
});

// L'objet porsche911 émet un message
porsche911.emit("arrivee", "Bravo, la Porsche 911 est parvenue à l'arrivée");