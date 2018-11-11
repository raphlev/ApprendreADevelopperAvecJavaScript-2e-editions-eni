var Personnes;
(function (Personnes) {
    Personnes.message = "Hello";
    var Personne = (function () {
        function Personne(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        Personne.prototype.hello = function () {
            alert(Personnes.message + this.nom + " " + this.prenom);
        };
        return Personne;
    }());
    Personnes.Personne = Personne;
})(Personnes || (Personnes = {}));
