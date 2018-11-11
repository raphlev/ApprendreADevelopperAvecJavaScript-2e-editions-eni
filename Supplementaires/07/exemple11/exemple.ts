enum Couleur { Rouge, Vert, Bleu };
let couleurs:Couleur[] = [ Couleur.Rouge, Couleur.Vert, Couleur.Vert, Couleur.Bleu ];

let RGB : [ Couleur, number ];
RGB=[Couleur.Rouge,0xfFF0000];
RGB=[Couleur.Rouge,"FF0000"]; // ERREUR
