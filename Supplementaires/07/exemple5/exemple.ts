function max(...params:number[]):number {
  let m:number=0;
  for (let i:number=0; i < params.length; i++ ) {
    m = Math.max(params[i],m);
  }
  return m;
}
alert( "Max =" + max(3,2,6));