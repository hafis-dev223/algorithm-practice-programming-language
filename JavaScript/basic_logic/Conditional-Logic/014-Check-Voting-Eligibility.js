function canVote(umur) {
  if (umur >= 17) {
    return "boleh memilih";
  } else {
    return "belum boleh memilih";
  }
}

console.log(canVote(20));
console.log(canVote(15));
console.log(canVote(17));
