interface AvecNom {
  nom:string;
}

class Personne {
  nom:string;
  prenom:string;
  public constructor(nom:string,prenom:string) {
    this.nom = nom;
    this.prenom = prenom;
  }
}

class Produit {
  nom:string;
  public constructor(nom:string) {
    this.nom = nom;
  }
}

let personne:AvecNom = new Personne( "brillant", "alexandre" );
let produit:AvecNom = new Produit( "ordinateur" );
alert( produit.nom );
