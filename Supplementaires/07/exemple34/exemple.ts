function tab<T>(a:T,b:T):T[] {
  let t = new Array<T>();
  t.push( a );
  t.push( b );
  return t;
}

let tabGenerique : <T>(a:T,b:T) => T[] = tab;
alert( tabGenerique<string>("hello","world") );
let tabGeneriqueBis : {<T>(a:T,b:T):T[] } = tab;

interface PourTab {
  <T>(a:T,b:T):T[];
}
let tabGeneriqueBisBis : PourTab = tab;

interface PourTab2<T> {
  (a:T,b:T):T[];
}

let tabString : PourTab2<string> = tab;
alert( tabString("hello2","world2" ) );