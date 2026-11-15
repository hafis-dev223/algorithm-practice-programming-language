let a = 10;
let b = 20;

function Swap(a, b) {
  let temp;

  temp = a;
  a = b;
  b = temp;

  return [a, b];
}

console.log(Swap(a, b));
