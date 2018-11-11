function max(a:any,b:any) {
  return Math.max( <number>a,<number>b );
}

let maxAll:any = ( max(10,20) ) as number;
alert( maxAll );
