class Personne {
  public static Auteur:Personne = new Personne( "brillant","alexandre");
  public constructor(readonly _nom:string,readonly _prenom:string) {
  }
  public get prenom():string {
    return this._prenom;
  }
  public get nom():string {
    return this._nom;
  }
}
alert( "L'auteur est " + Personne.Auteur.nom + " " + Personne.Auteur.prenom );

