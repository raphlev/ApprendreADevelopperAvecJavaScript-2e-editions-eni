interface AvecNom {
  nom:string;
  [propName: string]: any;
}

class Produit {
  nom:string;
  modele:string;
  constructor(nom:string,modele:string) {
    this.nom = nom;
    this.modele = modele;
  }
}

let hal1:AvecNom = new Produit( "hal", "9000" );

let hal2:AvecNom = {"nom":"hal","modele":"9000"}; // ERREUR
