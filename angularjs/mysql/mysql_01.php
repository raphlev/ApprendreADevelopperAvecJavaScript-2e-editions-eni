<?php

  /*
  Nom du script : mysql_01.php
  Auteur : Christian VIGOUROUX
  Date de cr�ation : 19/04/2016
  Date de derni�re modification : 19/4/2016
  Objet : Listage des enregistrements de la table MySQL voitures
  */

  // Autorisation d'acc�s depuis une application stock�e sur autre serveur
  header("Access-Control-Allow-Origin: *");

  // R�ponse JSON attendue de la part du script
  header("Content-Type: application/json");

  // Param�tres SGBD MySQL (serveur local)
  $serveur_mysql = "localhost";
  $utilisateur_mysql = "root";
  $mot_de_passe_mysql = "";
  $bdd_mysql = "angular";

  // D�finition de la requ�te SQL � soumettre � la Base De Donn�es MySQL
  $requete_sql = "select marque, modele, pays from voitures";

  // Test de connexion au serveur MySQL
  if (($connexion_mysql = @mysql_connect($serveur_mysql,
                          $utilisateur_mysql, $mot_de_passe_mysql)) === FALSE)
  {

    // Message d'erreur envoy� au client
    echo "";

  }
  else
  {

    // Test acc�s � la Base De Donn�es
    if ((@mysql_select_db($bdd_mysql, $connexion_mysql)) === FALSE) 
    {

      // Message d'erreur envoy� au client
      echo "";

    }
    else
    {

      // Soumission de la requ�te SQL au moteur SQL de MySQL
      $resultat_sql = @mysql_query($requete_sql, $connexion_mysql);

      // Test du nombre d'enregistrements s�lectionn�s
      if (@mysql_num_rows($resultat_sql) <1)
      {

        // Message d'erreur envoy� au client si pas d'enregistrement
        echo "";

      }
      else
      {

        // Parcours des enregistrements de la table MySQL voitures
        $donneesJSON ="";
        while ($enregistrement = mysql_fetch_assoc($resultat_sql))
        {

          // Pr�paration du flux JSON
          // NB : Il a �t� consid�r� ici que la version de PHP disponible
          // n'inclut pas la fonction de conversion en JSON (json_encode).
          // La g�n�ration a donc �t� effectu�e de mani�re "programmatique".
          if ($donneesJSON != "") {
            $donneesJSON .= ",";
          }
          $donneesJSON .= '{"marque":"' . $enregistrement["marque"] . '",';
          $donneesJSON .= '"modele":"' . $enregistrement["modele"] . '",';
          $donneesJSON .= '"pays":"'. $enregistrement["pays"] . '"}';

        }

        // Envoi du r�sultat au client
        echo '{"voitures":['.$donneesJSON.']}';

      }

    }

    // Fermeture de la connexion MySQL
    @mysql_close($connexion_mysql);

  }

?>