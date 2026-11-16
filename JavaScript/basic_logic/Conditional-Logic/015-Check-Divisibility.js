function checkDivisibility(angka) {
  if (angka % 5 === 0) {
    return "Habis dibagi 5";
  } else {
    return "Tidak habis dibagi 5";
  }
}

console.log(checkDivisibility(10));
console.log(checkDivisibility(12));
console.log(checkDivisibility(25));
