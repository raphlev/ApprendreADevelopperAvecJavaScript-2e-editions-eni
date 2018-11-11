class Personne {
  private nom:string;
  private prenom:string;

  public constructor(nom:string,prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
  public bonjour() {
    alert( "Bonjour " + this.prenom + " " + this.nom );
  }
}

let personne:Personne = new Personne( "Brillant", "Alexandre" );
personne.nom = "Autre"; // ERREUR !
personne.bonjour();
