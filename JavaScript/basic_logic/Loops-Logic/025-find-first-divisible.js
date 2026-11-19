function findFirstDivisible(n, divisor) {
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return -1;
}

console.log(findFirstDivisible(10, 3));
console.log(findFirstDivisible(15, 4));
console.log(findFirstDivisible(20, 7));
console.log(findFirstDivisible(5, 8));
