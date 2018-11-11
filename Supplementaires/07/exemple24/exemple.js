var Personne = (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    return Personne;
}());
var Produit = (function () {
    function Produit(nom) {
        this.nom = nom;
    }
    return Produit;
}());
var personne = new Personne("brillant", "alexandre");
var produit = new Produit("ordinateur");
alert(produit.prenom); // OK
alert(produit.autre);
