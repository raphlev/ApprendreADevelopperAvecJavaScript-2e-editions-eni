function lePlusGrand(a:any,b:any) {
  if ( typeof a == "string" && typeof b == "string") {
    return a.length > b.length;
  }
  if ( typeof a == "number" && typeof b == "number" ) {
    return a > b;
  }
  return false;
}

alert( lePlusGrand("ab","abc" ) );
alert( lePlusGrand( 10,8 ) );