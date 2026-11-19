function countEvenNumbers(n) {
  let angka = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      angka++;
    }
  }
  return angka;
}

console.log(countEvenNumbers(5));
console.log(countEvenNumbers(10));
console.log(countEvenNumbers(15));
console.log(countEvenNumbers(2));
