class Personne {
  public readonly nom:string;
  public readonly prenom:string;
  public constructor(nom:string,prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
  public bonjour() {
    alert( "Bonjour " + this.prenom + " " + this.nom );
  }
}
let personne:Personne = new Personne( "brillant", "Alexandre" );
personne.bonjour();
personne.nom = "Autre"; // ERREUR !

