var Personne = (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.nom = nom;
        this.prenom = prenom;
    }
    return Personne;
}());
var personne = new Personne("brillant", "Alexandre");
alert("Bonjour " + personne.prenom);
