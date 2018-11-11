class Personne {
  protected nom:string;
  protected prenom:string;
  public constructor(nom:string,prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
  public bonjour() {
    alert( "Bonjour " + this.prenom + " " + this.nom );
  }
}

class Employe extends Personne {
  private job:string;
  public constructor(nom:string,prenom:string,job:string) {
    super( nom, prenom );
    this.nom = this.nom.replace( /^([a-z])/, function( g1 ) { return g1.toUpperCase() } );
    this.job = job;
  }
  public bonjour() {
    super.bonjour();
    alert( "Vous etes " + this.job );
  }
}

let personne:Employe = new Employe( "brillant", "Alexandre", "Auteur" );
personne.bonjour();
