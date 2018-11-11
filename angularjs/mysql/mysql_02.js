// Déclaration du module nommé monApplicationo
var application = angular.module("monApplication", []);

// Déclaration du contrôleur nommé monControleur
application.controller("monControleur", function($scope, $http) {

  // URL du script PHP à appeler
  $scope.urlListageVoitures = "mysql_02.php";

  // Fonction de listage des voitures dans la BDD MySQL angular
  // via un script serveur PHP (mysql_02.php)
  $scope.listerVoitures = function() {

    // Création d'une requête http à poster (contenu JSON)
    // NB : Test d'existence de la variable paysMarquesPreferees
    //      pour éviter une erreur de décodage sur le serveur PHP
    // alert("Pays : " + $scope.paysMarquesPreferees);
    if ($scope.paysMarquesPreferees) {      
      $http.post($scope.urlListageVoitures,
      {"data" : $scope.paysMarquesPreferees})
      // Cas de succès
      .success(function(data, status) {
        // Récupération du status
        $scope.status = status;
        // Récupération du flux JSON
        $scope.voitures = data;
      })
      // Cas d'échec
      .error(function(data, status) {
        // Récupération du status
        $scope.status = status;
        // Message d'erreur
        $scope.data = "La requête a échouée";
      });
    }

  };

});