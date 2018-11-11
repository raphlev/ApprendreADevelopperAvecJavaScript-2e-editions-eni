class Personne {
  public constructor(readonly _nom:string,readonly _prenom:string) {
  }
  public get prenom():string {
    return this._prenom;
  }
  public get nom():string {
    return this._nom;
  }
}
let personne:Personne = new Personne( "brillant", "Alexandre" );
alert( "Bonjour " + personne.prenom );

