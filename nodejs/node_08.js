// Nom du script : node_08.js
// Auteur : Christian VIGOUROUX
// Date de création : 19/04/2016
// Date de dernière modification : 19/4/2016
// Objet : Affichage du 1er enregitrement d'une table voitures
//         depuis un serveur MySQL et affichage en mode console
// Installation du module mysql :
// - Se placer en ligne de commandes dans le répertoire des scripts
//   (E:\ENI_Javascript_2016\node.js)
// - Saisir la commande npm install mysql

// Appel de la bibliothèque Node.js http en vue de la création d'un serveur Web
var http = require('http');

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
 
// Listage des données de la table voitures
connexionMySQL.query(
  requeteSQL,
  function lectureEnregistrements(error, enregistrements) {
    if (error) {
      // Affichage d'un message d'erreur en mode console
      console.log(error);
      // Fermeture de la connexion au serveur MySQL
      connexionMySQL.end();
      // Sortie forcée
      return;
    }
    // Cas de données présentes
    if (enregistrements.length > 0)  { 
      // Affichage uniquement du premier enregistrement
      var premierEnregistrement = enregistrements[0];
      console.log("Marque : " + premierEnregistrement["marque"]);
      console.log("Modèle : " + premierEnregistrement["modele"]);
      console.log("Pays : " + premierEnregistrement["pays"]);
    } else {
      // Pas de données présentes
      console.log("Pas de données");
  }
  // Fermeture de la connexion au serveur MySQL
  connexionMySQL.end();
});

// Message à émettre au visiteur de la page
var messagePourVisiteur = function(requete, resultat) {
  // Envoi du code 200 (tout va bien) dans l'en-tête de la page
  resultat.writeHead(200);
  // Message envoyé à l'utilisateur
  resultat.end("Serveur en fonctionnement - Résultat en mode console");
}

// Instanciation du serveur
var serveur = http.createServer(messagePourVisiteur);

// Lancement du serveur sur le port 8080
serveur.listen(8080);