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

let personne:Personne = new Personne( "Brillant", "Alexandre" );
personne.bonjour();