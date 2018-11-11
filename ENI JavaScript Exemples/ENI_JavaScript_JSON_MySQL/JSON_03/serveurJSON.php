<?php
	
	// Type du flux
	header("Content-Type: application/json");
	
	// Lecture du fichier JSON voitures.json
	$donneesJSON = file_get_contents("voitures.json");
	
	// Envoi du flux JSON à l'application cliente
	echo $donneesJSON;
	
?>