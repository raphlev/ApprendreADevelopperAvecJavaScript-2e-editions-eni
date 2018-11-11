class Personne {
  nomPrenom:string;
  constructor(nomPrenom:string) {
    this.nomPrenom = nomPrenom;
  }
}

class Employe extends Personne {
  constructor(nomPrenom:string) {
    super( nomPrenom );
  }
}

interface EmployeTab {
  [idt:string]:Employe;
  [id:number]:Employe;
}

let employes:EmployeTab = { "auteur" : new Employe( "Brillant Alexandre" ) };
employes[10] = new Employe( "Jean Dupont" );
alert( employes[10].nomPrenom );
