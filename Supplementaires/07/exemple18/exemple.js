var Personne = (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.bonjour = function () {
        alert("Bonjour " + this.prenom + " " + this.nom);
    };
    return Personne;
}());
var personne = new Personne("brillant", "Alexandre");
// personne.nom = "Autre"; // ERREUR !
personne.bonjour();
