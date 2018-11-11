function table(max) {
    for (var i = 0; i <= max; i++) {
        for (var j = 0; j <= max; j++) {
            var message = i + "*" + j + "=" + i * j;
            console.log(message);
        }
    }
}
table("8");
