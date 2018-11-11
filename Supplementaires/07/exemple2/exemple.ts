function table( max ) {
  let i = 1;
  for ( ;i<=max;i++ ) {
    for ( let j = 1;j<=max;j++ ) {
      console.log( i + "*" + j + "=" + ( i * j ) );
    }
  }
  // let i = 2;
}
table(7);