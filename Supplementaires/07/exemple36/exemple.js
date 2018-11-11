var Chronometre = (function () {
    function Chronometre(compteur) {
        this.compteur = compteur;
    }
    Chronometre.prototype.valeur = function () {
        return this.compteur.incrementer();
    };
    return Chronometre;
}());
var CompteurEntier = (function () {
    function CompteurEntier() {
        this.cpt = 0;
    }
    CompteurEntier.prototype.incrementer = function () {
        this.cpt++;
        return this.cpt;
    };
    return CompteurEntier;
}());
var chronometreSimple = new Chronometre(new CompteurEntier());
alert(chronometreSimple.valeur());
alert(chronometreSimple.valeur());
