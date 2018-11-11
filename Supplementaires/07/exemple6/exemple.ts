function imc(poids:number,taille:number):string {
  let message=`votre imc est de ${poids/(taille*taille)}`;
  return message;
}
alert( imc(80,1.8) );
