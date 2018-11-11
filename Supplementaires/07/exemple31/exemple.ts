interface Politesse {
  bonjour():void;
}

interface AvecNom extends Politesse {
  nom:string;
}

class Personne implements AvecNom {
  nom:string;
  constructor(nom:string) {
    this.nom = nom;
  }
  bonjour():void {
    alert("Bonjour " + this.nom);
  }
}

class Chien implements AvecNom {
  nom:string;
  constructor(nom:string) {
    this.nom = nom;
  }
  bonjour():void {
    alert( "viens " + this.nom );
  }
}

let a:AvecNom = new Personne( "Dupont" );
a = new Chien( "Medor" );
a.bonjour();
