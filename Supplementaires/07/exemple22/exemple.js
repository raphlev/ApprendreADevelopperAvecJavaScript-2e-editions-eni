var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    return Personne;
}());
var Employe = (function (_super) {
    __extends(Employe, _super);
    function Employe(nom, prenom, job) {
        var _this = _super.call(this, nom, prenom) || this;
        _this.job = job;
        return _this;
    }
    Employe.prototype.bonjour = function () {
        alert("Vous etes l'employe " + this.nom + " " + this.prenom + " pour le poste :" + this.job);
    };
    return Employe;
}(Personne));
var personne = new Employe("Brillant", "Alexandre", "Auteur");
personne.bonjour();
