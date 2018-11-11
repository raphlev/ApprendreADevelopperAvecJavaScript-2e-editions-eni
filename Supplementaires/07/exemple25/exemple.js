var Produit = (function () {
    function Produit(nom) {
        this.nom = nom;
    }
    return Produit;
}());
var hal = new Produit("hal");
hal.nom = "hal 9000";
