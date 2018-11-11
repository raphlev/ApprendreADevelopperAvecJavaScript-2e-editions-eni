var Personne = (function () {
    function Personne(nom) {
        this.nom = nom;
    }
    Personne.prototype.bonjour = function () {
        alert("bonjour " + this.nom);
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
function hello(MaClasse, nom) {
    (new MaClasse(nom)).bonjour();
}
hello(Personne, "alex");
hello(Chien, "medor");
