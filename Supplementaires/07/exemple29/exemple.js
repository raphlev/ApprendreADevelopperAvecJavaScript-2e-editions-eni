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
    function Personne(nomPrenom) {
        this.nomPrenom = nomPrenom;
    }
    return Personne;
}());
var Employe = (function (_super) {
    __extends(Employe, _super);
    function Employe(nomPrenom) {
        return _super.call(this, nomPrenom) || this;
    }
    return Employe;
}(Personne));
var employes = { "auteur": new Employe("Brillant Alexandre") };
employes[10] = new Employe("Jean Dupont");
alert(employes[10].nomPrenom);
