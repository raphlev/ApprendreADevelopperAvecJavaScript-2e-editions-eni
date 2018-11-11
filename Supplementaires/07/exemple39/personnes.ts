namespace Personnes {

  export let message = "Hello";

  interface PeutDireBonjour {
    hello();
  }

  export class Personne implements PeutDireBonjour {
    private nom : string;
    private prenom : string;
    public constructor( nom : string, prenom : string ) {
        this.nom = nom;
        this.prenom = prenom;
    }
    public hello():void {
        alert( message + this.nom + " " + this.prenom );
    }
  }

  export class Employe extends Personne {
    public constructor( nom : string, prenom : string ) {
      super( nom, prenom );
    }
  }

}
