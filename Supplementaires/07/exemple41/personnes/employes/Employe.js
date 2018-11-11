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
var Personnes;
(function (Personnes) {
    var Employes;
    (function (Employes) {
        var Employe = (function (_super) {
            __extends(Employe, _super);
            function Employe(nom, prenom) {
                return _super.call(this, nom, prenom) || this;
            }
            return Employe;
        }(Personnes.Personne));
        Employes.Employe = Employe;
    })(Employes = Personnes.Employes || (Personnes.Employes = {}));
})(Personnes || (Personnes = {}));
