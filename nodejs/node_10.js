// Nom du script : node_10.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Affichage du 1er enregitrement d'une table voitures
//         depuis un serveur MySQL et affichage en mode HTML

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require("http");

// Appel de la bibliothèque Node.js mysql en vue d'un accès au SGBD MySQL
var mysql = require("mysql");

// Connexion au serveur MySQL
var connexionMySQL = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "",
  database : "nodejs"
});

// Définition de la requête SQL de listage du contenu de la table voitures
var requeteSQL = "SELECT * FROM voitures";

// Définition de la variable à afficher dans le navigateur
var affichageHTML = "<!DOCTYPE html><html><head><meta charset='utf-8' /><title>node_10.js</title></head><body>";

// Listage des données de la table voitures
connexionMySQL.query(
  requeteSQL,
  function select(error, enregistrements) {
    if (error) {
      // Affichage d'un message d'erreur en mode console
      console.log(error);
      // Fermeture de la connexion au serveur MySQL
      connexionMySQL.end();
      // Sortie forcée
      return;
    }
    // Cas de données présentes
    if (enregistrements.length > 0) {
      // Affichage des enregistrements
      for (var i in enregistrements) {
        // Récupération de l'enregistrement en cours
        var enregistrement = enregistrements[i]; 
        // Affichage des champs de l'enregistrements en cours en mode console
        console.log("Marque : " + enregistrement["marque"]);
        console.log("Modèle : " + enregistrement["modele"]);
        console.log("Pays : " + enregistrement["pays"]);
        // Préparation du message à afficher en mode HTML
        affichageHTML = affichageHTML + "<font face='Arial'>";
        affichageHTML = affichageHTML + "Marque : "
                        + enregistrement.marque + "<br />";
        affichageHTML = affichageHTML + "Modèle : "
                       + enregistrement.modele + "<br />";
        affichageHTML = affichageHTML + "Pays : "
                        + enregistrement.pays + "<br />"; 
        affichageHTML = affichageHTML + "</font>";
      }
      // Finalisation du message à afficher en mode HTML
      affichageHTML = affichageHTML + "</body></html>";
    } else {
      // Pas de données présentes
      console.log("Pas de données");
    }
    // Fermeture de la connexion au serveur MySQL
    connexionMySQL.end();
  }
);

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {
  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  resultat.writeHead(200);
  // Message envoyé à l'utilisateur
  resultat.end(affichageHTML);  
}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);