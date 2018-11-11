function table(max:number) {
  for ( let i:number=0; i<=max; i++ ) {
    for ( let j:number=0; j <=max; j++ ) {
      let message:string = `${i}*${j}=${i*j}`;
      console.log( message );
    }
  }
}
table("8");