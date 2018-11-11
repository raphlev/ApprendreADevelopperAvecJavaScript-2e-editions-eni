var Personne = (function () {
    function Personne(nom) {
        this.nom = nom;
    }
    Personne.prototype.bonjour = function () {
        alert("Bonjour " + this.nom);
    };
    return Personne;
}());
var Chien = (function () {
    function Chien(nom) {
        this.nom = nom;
    }
    Chien.prototype.bonjour = function () {
        alert("viens " + this.nom);
    };
    return Chien;
}());
var a = new Personne("Dupont");
a = new Chien("Medor");
a.bonjour();
