function sumOfDigits(n) {
  let count = 0;

  while (n > 0) {
    let digit = n % 10;
    count += digit;
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(4567));
console.log(sumOfDigits(905));
console.log(sumOfDigits(7));
console.log(sumOfDigits(100));
console.log(sumOfDigits(999));
