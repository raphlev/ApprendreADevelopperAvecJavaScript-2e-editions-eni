// Nom du script : node_03.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Un simple "Hello World" en HTML valide

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {

  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  // avec le type MIME text/html pour indiquer un envoi de code HTML
  // au navigateur
  resultat.writeHead(200, {"Content-Type": "text/html"});

  // Préparation du script HTML à mettre à disposition du navigateur 
  resultat.write("<!DOCTYPE html>" +
    "<html>" +
    "    <head>" +
    "        <meta charset='utf-8' />" +
    "        <title>Hello World (node_03.js)</title>" +
    "    </head>" + 
    "    <body>" +
    "      <font face=Arial>Hello <b>World</b> (document valide)</font>" +
    "    </body>" +
    "</html>"
  );
  
  // Message envoyé à l'utilisateur
  resultat.end();  

}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);