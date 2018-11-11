<?php

  /*
  Nom du script : mysql_03.php
  Auteur : Christian VIGOUROUX
  Date de création : 19/04/2016
  Date de dernière modification : 19/4/2016
  Objet : Ajout d'un nouvel enregistrement dans la table MySQL voitures_sport
  */

  // Autorisation d'accès depuis une application stockée sur autre serveur
  header("Access-Control-Allow-Origin: *");

  // Réponse JSON attendue de la part du script
  header("Content-Type: application/json");

  // Récupération des variables postées par le script appelant
  $parametresAngular = file_get_contents("php://input");
  $objetParametresAngular = json_decode($parametresAngular);
	
  // Extraction des données	
  $marque = $objetParametresAngular->marque;
  $modele = $objetParametresAngular->modele;
  $pays = $objetParametresAngular->pays;
	
  // Définition de la requête SQL à soumettre à la Base De Données MySQL
  $requete_sql = "insert into voitures (marque, modele, pays)
                 values('$marque', '$modele', '$pays');";
	
  // Paramètres SGBD MySQL (serveur local)
  $serveur_mysql = "localhost";
  $utilisateur_mysql = "root";
  $mot_de_passe_mysql = "";
  $bdd_mysql = "angular";
	
  // Test de connexion au serveur MySQL
  if (($connexion_mysql = @mysql_connect($serveur_mysql,
                          $utilisateur_mysql, $mot_de_passe_mysql)) === FALSE)
  {

    // Message d'erreur envoyé au client
    echo "Echec connexion serveur MySQL";

  }
  else
  {
		
    // Test accès à la Base De Données
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
    {

      // Message d'erreur envoyé au client
      echo "Echec de connexion à la Base De Données MySQL angular";

    }
    else
    {

      // Soumission de la requête SQL au moteur SQL de MySQL
      $resultat_sql = @mysql_query($requete_sql, $connexion_mysql);

      // Affichage message de confirmation de création ou non
      // if ($resultat_sql)
      // {
      //	 echo "Insertion réussie !";
      // }
      // else
      // {
      //	 echo "Echec d'insertion !";
      // }
    }
		
    // Fermeture de la connexion MySQL
    @mysql_close($connexion_mysql);
	
  }

?>