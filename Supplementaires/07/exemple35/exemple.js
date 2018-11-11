var Personne = (function () {
    function Personne(matricule) {
        this.matricule = matricule;
    }
    return Personne;
}());
var personne = new Personne(100);
alert(personne.matricule);
