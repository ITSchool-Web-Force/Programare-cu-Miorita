// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei

reset();

function moveToEachCorner(run) {
  for (i = 0; i < run; i++) {
    while (canMove()) {
      move();
    }
    turnRight();
  }
}
moveToEachCorner(5);
