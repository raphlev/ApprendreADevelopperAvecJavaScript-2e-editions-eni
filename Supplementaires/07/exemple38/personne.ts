export class Personne {
  private nom : string;
  private prenom : string;
  public constructor( nom : string, prenom : string ) {
      this.nom = nom;
      this.prenom = prenom;
  }
  public hello():void {
      alert( "Hello " + this.nom + " " + this.prenom );
  }
}