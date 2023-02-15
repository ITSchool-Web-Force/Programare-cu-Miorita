// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei
reset();
for (let i = 0; i < 28; i++) {
  canMove() ? move() : turnRight();
}

reset();

for (let i = 0; i < 5; i++) {
  while (canMove()) {
    move();
  }
  if (!canMove()) {
    turnRight();
  }
}
