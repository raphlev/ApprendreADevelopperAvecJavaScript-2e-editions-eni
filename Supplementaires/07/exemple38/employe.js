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
define(["require", "exports", "./personne"], function (require, exports, personne_1) {
    "use strict";
    exports.__esModule = true;
    var Employe = (function (_super) {
        __extends(Employe, _super);
        function Employe(prenom, nom) {
            return _super.call(this, prenom, nom) || this;
        }
        return Employe;
    }(personne_1.Personne));
    exports.Employe = Employe;
});
