function isValidDate(day, month, year) {
  if (month < 1 || month > 12 || year <= 0 || day < 1) {
    return "Invalid";
  }

  let maxDays;

  if (month === 2) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      maxDays = 29;
    } else {
      maxDays = 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    maxDays = 30;
  } else {
    maxDays = 31;
  }

  if (day > maxDays) {
    return "Invalid";
  }

  return "Valid";
}

console.log(isValidDate(17, 11, 2026));
console.log(isValidDate(29, 2, 2024));
console.log(isValidDate(29, 2, 2025));
console.log(isValidDate(31, 4, 2026));
console.log(isValidDate(31, 12, 2026));
console.log(isValidDate(0, 1, 2026));
console.log(isValidDate(15, 13, 2026));
