/// <reference path="personnes/Personne.ts" />
/// <reference path="personnes/employes/Employe.ts" />

import Employe = Personnes.Employes.Employe

let auteur : Employe = new Employe( "brillant", "alexandre" );
auteur.hello();
