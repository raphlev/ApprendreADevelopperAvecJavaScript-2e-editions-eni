interface Incrementable {
  incrementer():number;
}

class Chronometre<T extends Incrementable> {
  private compteur:T;
  constructor(compteur:T) {
    this.compteur = compteur;
  }
  valeur():number {
    return this.compteur.incrementer();
  }
}

class CompteurEntier implements Incrementable {
  cpt:number=0;
  incrementer():number {
    this.cpt++;
    return this.cpt;
  }
}

let chronometreSimple : Chronometre<CompteurEntier> = new Chronometre<CompteurEntier>( new CompteurEntier() );
alert( chronometreSimple.valeur() );
alert( chronometreSimple.valeur() );
