interface Max {
  (a:number,b:number):number;
}

let max:Max = function(i:number,j:number):number {
  return Math.max( i, j );
}

alert( max(5,2) );