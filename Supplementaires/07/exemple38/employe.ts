import { Personne } from "./personne"

export class Employe extends Personne {
  public constructor( prenom : string, nom : string ) {
    super( prenom, nom );
  }
}