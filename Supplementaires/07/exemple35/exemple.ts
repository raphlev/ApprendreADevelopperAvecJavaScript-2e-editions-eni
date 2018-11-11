class Personne<T> {
  matricule:T;
  nom:string;
  prenom:string;
  constructor(matricule:T) {
    this.matricule = matricule;
  }
}

let personne : Personne<number> = new Personne<number>(100);


alert( personne.matricule );