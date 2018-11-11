var Personne = (function () {
    function Personne(nomPrenom) {
        this.nomPrenom = nomPrenom;
    }
    return Personne;
}());
var personnes = [new Personne("brillant alexandre"), new Personne("jean dupont")];
