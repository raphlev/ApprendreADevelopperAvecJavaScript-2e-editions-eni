<?php

	// Définition du header 
	header("Content-Type: application/json");
	
	// Récupération du paramètre passé par l'application client
	$code = $_POST["code"];
	
    // Définition de la requête SQL à soumettre
    // à la Base De Données MySQL
	$requete_sql =
	"select code_voiture, libelle_voiture,
	vitesse_maximale_voiture
	from voitures
	where code_voiture='$code';";
	// return "Requête SQL : $requete_sql";

	// Paramètres SGBD MySQL
	$serveur_mysql = "localhost";
	$utilisateur_mysql = "root";
	$mot_de_passe_mysql = "";
	$bdd_mysql = "json";
	
	// Test de connexion à MySQL
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
			$resultat_sql
			= @mysql_query($requete_sql, $connexion_mysql);

			// Test du nombre d'enregistrements sélectionnés
        	if (@mysql_num_rows($resultat_sql) <1)
			{

				// Message d'erreur envoyé au client
				// si pas d'enregistrement
				echo "";
	
			}
			else
			{
					
				while
				($enregistrement = mysql_fetch_assoc($resultat_sql))
				{
                    // Placement des 3 champs
                    // (code_voiture, libelle_voiture et vitesse_maximale_voiture)
                    // de l'enregistrement en cours
                    // dans le tableau $lignes (qui contiendra au final
                    // l'intégralité des données)	
                    $lignes[] = $enregistrement;
				}
				// Encodage en format JSON du tableau $lignes
				$donneesJSON = json_encode($lignes);				
				
				// Envoi du résultat au client
				echo $donneesJSON;	

			}

		}
	
	}

	// Fermeture de la connexion MySQL
	@mysql_close($connexion_mysql);

?>