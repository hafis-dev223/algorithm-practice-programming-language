function countOddNumbers(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum++;
    }
  }
  return sum;
}

console.log(countOddNumbers(5));
console.log(countOddNumbers(10)); 
console.log(countOddNumbers(15))
console.log(countOddNumbers(2)); 