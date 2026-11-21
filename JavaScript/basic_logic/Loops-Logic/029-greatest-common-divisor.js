function greatestCommonDivisor(a, b) {
  let angkaCadangan = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      angkaCadangan = i;
    }
  }

  return angkaCadangan;
}

console.log(greatestCommonDivisor(12, 8)); // 4
console.log(greatestCommonDivisor(15, 10)); // 5
console.log(greatestCommonDivisor(7, 3)); // 1
console.log(greatestCommonDivisor(20, 5)); // 5
console.log(greatestCommonDivisor(18, 12)); // 6
