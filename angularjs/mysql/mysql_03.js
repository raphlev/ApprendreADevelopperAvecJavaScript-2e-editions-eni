// Déclaration du module nommé application
var application = angular.module("monApplication", []);

// Déclaration du contrôleur nommé monControleur
application.controller("monControleur", function($scope, $http) {

  // Fonction d'ajout d'une voiture dans la BDD MySQL angular
  // via un script serveur PHP (mysql_03.php)
  $scope.ajouterVoiture = function(marque, modele, pays) {

    // Création d'une requête http à poster (contenu JSON)
    // NB : Test d'existence de la variable marqueVoiture
    // pour éviter une erreur de décodage sur le serveur PHP
    if ($scope.marqueVoiture) {

      // Requête http
      $http({
        url: "mysql_03.php",
        method: "POST",
        data: {marque:marque, modele:modele, pays:pays},
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
      })
      .then(function successCallback(response) {
        // Cas succès
        // ...
      }, function errorCallback(response) {
        // Cas échec
        // ...
      });

    }

  };

});