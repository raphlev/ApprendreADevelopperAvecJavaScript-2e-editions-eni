// D�claration du contr�leur nomm� monControleur
angular.module('monApplication', []).controller('monControleur', function($scope) {
	
  // Initialisation des variables marque et modele
  $scope.marque = "Porsche",
  $scope.modele = "911",
	
  // M�thode afficherVoiturePreferee
  $scope.afficherVoiturePreferee = function() {
    return $scope.marque + " " + $scope.modele;
  };

});