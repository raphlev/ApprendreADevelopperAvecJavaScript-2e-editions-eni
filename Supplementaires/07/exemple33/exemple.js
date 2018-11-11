function tab(a, b) {
    var t = new Array();
    t.push(a);
    t.push(b);
    return t;
}
alert(tab("hello", "world"));
alert(tab(10, 20));
// alert( tab<boolean>( true, "false" ) ); // ERREUR 
