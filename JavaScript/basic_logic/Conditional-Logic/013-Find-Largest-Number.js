function findLargest(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "sama";
  }
}

console.log(findLargest(10, 20));
console.log(findLargest(50, 30));
console.log(findLargest(7, 7));
