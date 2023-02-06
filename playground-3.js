// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.

reset();

while (true) {
  if(canMove()) {
    break;
  }
  turnRight();
}

while (canMove()) {
    move();
}