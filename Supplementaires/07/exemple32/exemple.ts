interface ClasseAvecNom {
  new (nom:string):AvecNom;
}

interface AvecNom {
  nom:string;
  bonjour():void;
}

class Personne implements AvecNom {
  nom:string;
  constructor(nom:string) {
    this.nom = nom;
  }
  bonjour():void {
    alert( "bonjour " + this.nom );
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

function hello(MaClasse:ClasseAvecNom,nom:string) {
  ( new MaClasse( nom ) ).bonjour();
}

hello(Personne,"alex");
hello(Chien,"medor");