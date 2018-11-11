// Nom du script : node_05.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Récupération de l'URL (avec des paramètres) demandée par le client

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Appel de la bibliothèque Node.js url en vue de récupérer l'URL
// demandée par le client
var url = require("url");

// Appel de la bibliothèque Node.js querystring en vue de récupérer
// les paramètres stockés dans l'URL demandée par le client
var querystring = require("querystring");

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {

  // Détermination de l'URL demandée
  var page = url.parse(requete.url).pathname;

  // Récupération des paramètres de l'URL       
  var params = querystring.parse(url.parse(requete.url).query);

  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  // avec le type MIME text/html pour indiquer un envoi de code HTML
  // au navigateur
  resultat.writeHead(200, {"Content-Type": "text/html"});

  // Test de la présence des paramètres marque et modele dans l'URL 
  resultat.write("<font face='Arial'>");
  if ("marque" in params && "modele" in params) {
    resultat.write("Votre voiture préférée est "
                   + params["marque"] + " " + params["modele"]);
  }
  else {
    resultat.write("Vous devez bien avoir un modèle");
    resultat.write(" de voiture de sport préféré !!!");
  }
  resultat.write("</font>");

  // Message envoyé à l'utilisateur
  resultat.end();  

}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);