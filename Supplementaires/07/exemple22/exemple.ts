abstract class Personne {
  nom:string;
  prenom:string;
  constructor(nom:string,prenom:string) {
      this.nom = nom;
      this.prenom = prenom;
  }
  abstract bonjour() : void;
}

class Employe extends Personne {
  job:string;
  constructor(nom:string,prenom:string,job:string) {
    super(nom,prenom);
    this.job = job;
  }

  bonjour() {
    alert( "Vous etes l'employe " + this.nom + " " + this.prenom + " pour le poste :" + this.job );
  }
}

let personne:Employe = new Employe( "Brillant", "Alexandre", "Auteur" );
personne.bonjour();
