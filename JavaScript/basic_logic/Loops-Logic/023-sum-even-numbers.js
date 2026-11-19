function sumEvenNumbers(n) {
  let angkaCadangan = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      angkaCadangan += i;
    }
  }

  return angkaCadangan;
}

console.log(sumEvenNumbers(5));
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(15));
console.log(sumEvenNumbers(2));
