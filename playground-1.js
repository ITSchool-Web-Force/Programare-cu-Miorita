// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei

// Aici m-am gandit la 2 variante: infinite loop si una finite
// infinite loop
reset();

while () {
  if (canMove()) {
    move();
  } else {
    turnRight();
    if (!canMove()) {
      break;
    }
  }
}

/* finite loop - dupa ce face dreapta de 5 ori (4 colturi + prima latura de care se loveste incepand din mijloc)

reset();

let turnRightCount = 0;

while (turnRightCount < 5) {
  if (canMove()) {
    move();
  } else {
    turnRight();
    turnRightCount++;
    if (turnRightCount === 5) {
      break;
    }
    if (canMove()) {
      move();
    } else {
      break;
    }
  }
}
*/