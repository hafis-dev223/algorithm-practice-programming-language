function sumOfNumbers(n) {
  let angka = 0;

  for (let i = 1; i <= n; i++) {
    angka += i;
  }

  return angka;
}
console.log(sumOfNumbers(5));
