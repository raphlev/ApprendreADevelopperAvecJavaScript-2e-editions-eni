<?php

  /*
  Nom du script : mysql_01.php
  Auteur : Christian VIGOUROUX
  Date de création : 19/04/2016
  Date de dernière modification : 19/4/2016
  Objet : Listage des enregistrements de la table MySQL voitures
  */

  // Autorisation d'accès depuis une application stockée sur autre serveur
  header("Access-Control-Allow-Origin: *");

  // Réponse JSON attendue de la part du script
  header("Content-Type: application/json");

  // Paramètres SGBD MySQL (serveur local)
  $serveur_mysql = "localhost";
  $utilisateur_mysql = "root";
  $mot_de_passe_mysql = "";
  $bdd_mysql = "angular";

  // Définition de la requête SQL à soumettre à la Base De Données MySQL
  $requete_sql = "select marque, modele, pays from voitures";

  // Test de connexion au serveur MySQL
  if (($connexion_mysql = @mysql_connect($serveur_mysql,
                          $utilisateur_mysql, $mot_de_passe_mysql)) === FALSE)
  {

    // Message d'erreur envoyé au client
    echo "";

  }
  else
  {

    // Test accès à la Base De Données
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE) 
    {

      // Message d'erreur envoyé au client
      echo "";

    }
    else
    {

      // Soumission de la requête SQL au moteur SQL de MySQL
      $resultat_sql = @mysql_query($requete_sql, $connexion_mysql);

      // Test du nombre d'enregistrements sélectionnés
      if (@mysql_num_rows($resultat_sql) <1)
      {

        // Message d'erreur envoyé au client si pas d'enregistrement
        echo "";

      }
      else
      {

        // Parcours des enregistrements de la table MySQL voitures
        $donneesJSON ="";
        while ($enregistrement = mysql_fetch_assoc($resultat_sql))
        {

          // Préparation du flux JSON
          // NB : Il a été considéré ici que la version de PHP disponible
          // n'inclut pas la fonction de conversion en JSON (json_encode).
          // La génération a donc été effectuée de manière "programmatique".
          if ($donneesJSON != "") {
            $donneesJSON .= ",";
          }
          $donneesJSON .= '{"marque":"' . $enregistrement["marque"] . '",';
          $donneesJSON .= '"modele":"' . $enregistrement["modele"] . '",';
          $donneesJSON .= '"pays":"'. $enregistrement["pays"] . '"}';

        }

        // Envoi du résultat au client
        echo '{"voitures":['.$donneesJSON.']}';

      }

    }

    // Fermeture de la connexion MySQL
    @mysql_close($connexion_mysql);

  }

?>