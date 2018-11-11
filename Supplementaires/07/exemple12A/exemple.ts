let tab:[string] = [ "hello", "world" ];
for ( let value of tab ) {
  console.log( "valeur=" + value );
}

let obj = {
  "prenom" : "alexandre",
  "nom" : "brillant"
};

for ( let key in obj ) {
  console.log( "cle=" + key )
}