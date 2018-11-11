class Personne {
  public constructor(readonly nom:string,readonly prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
}
let personne:Personne = new Personne( "brillant", "Alexandre" );
alert( "Bonjour " + personne.prenom );


