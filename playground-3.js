// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.
reset();

let free = true;

while (free) {
  if (canMove()) {
    move();
  } else {
    while (!canMove()) {
      turnRight();
    }
  }
  if (!canMove()) {
    break;
  }
}

// sau:

reset();

while (!canMove()) {
  turnRight();
}
while (canMove()) {
  move();
}
