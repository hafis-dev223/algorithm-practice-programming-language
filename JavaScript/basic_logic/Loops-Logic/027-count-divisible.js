function countDivisible(n, a, b) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % a === 0 || i % b === 0) {
      count++;
    }
  }

  return count;
}

console.log(countDivisible(10, 2, 3));
console.log(countDivisible(15, 3, 5));
console.log(countDivisible(20, 4, 6));
console.log(countDivisible(5, 7, 9));
