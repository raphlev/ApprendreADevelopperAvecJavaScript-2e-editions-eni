function tab(a, b) {
    var t = new Array();
    t.push(a);
    t.push(b);
    return t;
}
var tabGenerique = tab;
alert(tabGenerique("hello", "world"));
var tabGeneriqueBis = tab;
var tabGeneriqueBisBis = tab;
var tabString = tab;
alert(tabString("hello2", "world2"));
