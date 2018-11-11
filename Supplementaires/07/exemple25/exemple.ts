interface AvecNom {
  readonly nom:string;
}

class Produit {
  nom:string;
  public constructor(nom:string) {
    this.nom = nom;
  }
}

let hal:AvecNom = new Produit( "hal" );
hal.nom = "hal 9000";