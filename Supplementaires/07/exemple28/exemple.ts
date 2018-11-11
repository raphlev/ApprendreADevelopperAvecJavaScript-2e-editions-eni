class Personne {
  nomPrenom:string;
  constructor(nomPrenom:string) {
    this.nomPrenom = nomPrenom;
  }
}

interface PersonneTab {
  [id:number]:Personne;
}

let personnes:PersonneTab = [ new Personne( "brillant alexandre" ), new Personne( "jean dupont" ) ];
