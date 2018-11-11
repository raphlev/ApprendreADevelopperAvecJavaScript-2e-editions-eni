var Produit = (function () {
    function Produit(nom, modele) {
        this.nom = nom;
        this.modele = modele;
    }
    return Produit;
}());
var hal1 = new Produit("hal", "9000");
var hal2 = { "nom": "hal", "modele": "9000" }; // ERREUR
