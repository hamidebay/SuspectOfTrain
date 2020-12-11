let tour = 0;
const wagon = Math.floor(Math.random() * 10) + 1;

for (tour = 1; tour < 5; tour++) {
  let tahmin = prompt("tahminini gir");

  if (tahmin == wagon) {
    alert("Bravooo kazandin");
  } else if (tahmin < wagon) {
    alert("Hirsiz arka vagonlarda");
  } else {
    if (tahmin > wagon) alert("Hirsiz ön vagonlarda");
  }
  if (tour == 4 && tahmin != wagon) {
    alert("üzgünüm hirsizi bulamadiniz");
  }
}
