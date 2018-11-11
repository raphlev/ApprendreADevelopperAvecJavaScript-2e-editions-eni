<?php

  /*
  Nom du script : mysql_03.php
  Auteur : Christian VIGOUROUX
  Date de cr�ation : 19/04/2016
  Date de derni�re modification : 19/4/2016
  Objet : Ajout d'un nouvel enregistrement dans la table MySQL voitures_sport
  */

  // Autorisation d'acc�s depuis une application stock�e sur autre serveur
  header("Access-Control-Allow-Origin: *");

  // R�ponse JSON attendue de la part du script
  header("Content-Type: application/json");

  // R�cup�ration des variables post�es par le script appelant
  $parametresAngular = file_get_contents("php://input");
  $objetParametresAngular = json_decode($parametresAngular);
	
  // Extraction des donn�es	
  $marque = $objetParametresAngular->marque;
  $modele = $objetParametresAngular->modele;
  $pays = $objetParametresAngular->pays;
	
  // D�finition de la requ�te SQL � soumettre � la Base De Donn�es MySQL
  $requete_sql = "insert into voitures (marque, modele, pays)
                 values('$marque', '$modele', '$pays');";
	
  // Param�tres SGBD MySQL (serveur local)
  $serveur_mysql = "localhost";
  $utilisateur_mysql = "root";
  $mot_de_passe_mysql = "";
  $bdd_mysql = "angular";
	
  // Test de connexion au serveur MySQL
  if (($connexion_mysql = @mysql_connect($serveur_mysql,
                          $utilisateur_mysql, $mot_de_passe_mysql)) === FALSE)
  {

    // Message d'erreur envoy� au client
    echo "Echec connexion serveur MySQL";

  }
  else
  {
		
    // Test acc�s � la Base De Donn�es
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE)
    {

      // Message d'erreur envoy� au client
      echo "Echec de connexion � la Base De Donn�es MySQL angular";

    }
    else
    {

      // Soumission de la requ�te SQL au moteur SQL de MySQL
      $resultat_sql = @mysql_query($requete_sql, $connexion_mysql);

      // Affichage message de confirmation de cr�ation ou non
      // if ($resultat_sql)
      // {
      //	 echo "Insertion r�ussie !";
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