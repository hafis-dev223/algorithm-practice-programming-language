const angka = [3, 8, 2, 15, 6, 10];

function MencariAngka(angka) {
  let Penyimpanan = 0;

  for (let i = 0; i < angka.length; i++) {
    if (angka[i] > Penyimpanan) {
      Penyimpanan = angka[i];
    }
  }

  return Penyimpanan;
}

console.log(MencariAngka(angka));
