function checkTemperature(suhu) {
  if (suhu > 30) {
    return "Panas";
  } else if (suhu >= 20) {
    return "Normal";
  } else {
    return "dingin";
  }
}

console.log(checkTemperature(35));
console.log(checkTemperature(20));
console.log(checkTemperature(10));
