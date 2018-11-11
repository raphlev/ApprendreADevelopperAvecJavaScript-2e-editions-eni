function tab<T>(a:T,b:T):T[] {
  let t = new Array<T>();
  t.push( a );
  t.push( b );
  return t;
}

alert( tab<string>( "hello", "world" ) );
alert( tab<number>( 10, 20 ) );
alert( tab<boolean>( true, "false" ) ); // ERREUR