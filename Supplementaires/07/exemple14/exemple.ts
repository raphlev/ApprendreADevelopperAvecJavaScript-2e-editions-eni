class Personne {
  nom:string;
  prenom:string;
  constructor(nom:string,prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
  bonjour() {
    alert( "Bonjour " + this.prenom + " " + this.nom );
  }
}

class Employe extends Personne {
  job:string;
  constructor(nom:string,prenom:string,job:string) {
    super(nom,prenom);
    this.job = job;
  }
  
  bonjour() {
    super.bonjour();
    alert( "Vous êtes " + this.job );
  }
}

let personne:Employe = new Employe( "Brillant", "Alexandre", "Auteur" );
personne.bonjour();
