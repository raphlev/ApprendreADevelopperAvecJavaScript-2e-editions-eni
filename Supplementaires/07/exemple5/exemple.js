function max() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var m = 0;
    for (var i = 0; i < params.length; i++) {
        m = Math.max(params[i], m);
    }
    return m;
}
alert("Max =" + max(3, 2, 6));
