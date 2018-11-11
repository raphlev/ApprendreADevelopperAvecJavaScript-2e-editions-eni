function table(max) {
    var i = 1;
    for (; i <= max; i++) {
        for (var j = 1; j <= max; j++) {
            console.log(i + "*" + j + "=" + (i * j));
        }
    }
    var i = 2;
}
table(7);
