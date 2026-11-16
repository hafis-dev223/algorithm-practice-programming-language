function classifyTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid";
  } else if (a === b && a === c && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(classifyTriangle(5, 5, 5));
console.log(classifyTriangle(5, 5, 8));
console.log(classifyTriangle(4, 5, 6));
console.log(classifyTriangle(1, 2, 10));
console.log(classifyTriangle(0, 5, 5));
console.log(classifyTriangle(-2, 5, 5));
