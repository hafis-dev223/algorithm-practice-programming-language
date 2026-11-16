function checkNumber(angka) {
  if (angka > 0) {
    return "Positif";
  } else if (angka < 0) {
    return "Negatif";
  } else {
    return "NOl";
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
