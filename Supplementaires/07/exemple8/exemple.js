var RGB;
(function (RGB) {
    RGB[RGB["Rouge"] = 268369920] = "Rouge";
    RGB[RGB["Vert"] = 65280] = "Vert";
    RGB[RGB["Bleu"] = 255] = "Bleu";
})(RGB || (RGB = {}));
;
var uneCouleur = RGB.Rouge;
console.log(uneCouleur);
console.log(RGB[0xfFF0000]);
