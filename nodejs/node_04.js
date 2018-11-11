// Nom du script : node_04.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Récupération de l'URL demandée par le client
//         et traitements différenciés

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Appel de la bibliothèque Node.js url en vue de récupérer l'URL
// demandée par le client
var url = require("url");

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {

  // Détermination de l'URL demandée
  var page = url.parse(requete.url).pathname;
  
  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  // avec le type MIME text/html pour indiquer un envoi de code HTML
  // au navigateur
  resultat.writeHead(200, {"Content-Type": "text/html"});

  // Préparation du script HTML à mettre à disposition du navigateur 
  resultat.write("<font face='Arial'>");
  if (page == "/") {
    resultat.write("Vous êtes sur la page de garde de présentation");
    resultat.write(" de voitures de sport<br />Rajoutez /de ou /it à votre URL");
  }
  else if (page == "/de") {
    resultat.write("Sur cette page, le descriptif de quelques voitures");
    resultat.write(" de sport allemandes<br />A venir");
  }
  else if (page == "/it") {
    resultat.write("Sur cette page, le descriptif de quelques voitures");
    resultat.write(" de sport italiennes<br />A venir");
  }
  resultat.write("</font>");

  // Message envoyé à l'utilisateur
  resultat.end();

}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);