<?php

    /*
    Nom du script : mysql_02.php
    Auteur : Christian VIGOUROUX
    Date de cr�ation : 19/04/2016
    Date de derni�re modification : 19/4/2016
    Objet : Listage des enregistrements de la table MySQL voitures_sport (filtrage sur un pays)
    */

    // Autorisation d'acc�s depuis un application stock�e sur autre serveur
    header("Access-Control-Allow-Origin: *");

    // D�finition du header
    header("Content-Type: application/json");
    
    // R�cup�ration des variables post�es par le script appelant
	$parametresAngular = file_get_contents("php://input");
	$objetParametresAngular = json_decode($parametresAngular);

    // D�finition de la requ�te SQL � soumettre � la Base De Donn�es MySQL
    if($objetParametresAngular->data != "Tous") {
		$requete_sql = 'select * from voitures_sport where pays="'. $objetParametresAngular->data .'"';
	}
	else {
		$requete_sql = 'select * from voitures_sport';
	}

    // Param�tres SGBD MySQL (serveur local)
    $serveur_mysql = "localhost";
    $utilisateur_mysql = "root";
    $mot_de_passe_mysql = "";
    $bdd_mysql = "angular";
    
    // Test de connexion � MySQL
    if (($connexion_mysql = @mysql_connect($serveur_mysql, $utilisateur_mysql, $mot_de_passe_mysql)) === FALSE)
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

            // Test du nombre d'enregistrements s�lectionn�s
            if (@mysql_num_rows($resultat_sql) <1)
            {

                // Message d'erreur envoy� au client si pas d'enregistrement
                // echo "Absence d'enregistrements";
				echo "[]";
    
            }
            else
            {
                // Parcours des enregistrements de la table MySQL angular_voitures_sport
                $donneesJSON ="";
                while ($enregistrement = mysql_fetch_assoc($resultat_sql))
                {
                    // Placement des 3 champs (marque, modele et pays) de l'enregistrement en cours
                    // dans le tableau $lignes (qui contiendra au final l'int�gralit� des donn�es)

                    // Stockage de l'enregistrement en cours dans un tableau $lignes (en vue d'un code JSON ult�rieur)
                    // NB : La fonction de conversion en JSON (json_encode) n'est pas disponible sur ce serveur
                    // $lignes[] = $enregistrement;

                    // Pr�paration du flux JSON
                    if ($donneesJSON != "") {
                        $donneesJSON .= ",";
                    }
                    $donneesJSON .= '{"marque":"' . $enregistrement["marque"] . '",';
                    $donneesJSON .= '"modele":"' . $enregistrement["modele"] . '",';
                    $donneesJSON .= '"pays":"'. $enregistrement["pays"] . '"}';

                }
                // Encodage en format JSON du tableau $lignes
                // NB : La fonction de conversion en JSON (json_encode) n'est pas disponible sur ce serveur

                // Envoi du r�sultat au client
                // echo '{"voitures_sport":['.$donneesJSON.']}';
				echo '['.$donneesJSON.']';
				// echo $donneesJSON;

            }

        }
		
		// Fermeture de la connexion MySQL
		@mysql_close($connexion_mysql);
    
    }

?>