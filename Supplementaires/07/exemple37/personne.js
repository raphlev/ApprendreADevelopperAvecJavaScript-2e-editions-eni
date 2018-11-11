define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Personne = (function () {
        function Personne(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        Personne.prototype.hello = function () {
            alert("Hello " + this.nom + " " + this.prenom);
        };
        return Personne;
    }());
    exports.Personne = Personne;
    var personne = new Personne("brillant", "alexandre");
    personne.hello();
});
