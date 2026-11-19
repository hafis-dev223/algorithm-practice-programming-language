function findLastDivisible(n, divisor) {
  for (let i = n; i >= 1; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return -1;
}

console.log(findLastDivisible(10, 3));
console.log(findLastDivisible(15, 4));
console.log(findLastDivisible(20, 7));
console.log(findLastDivisible(5, 8));
