// https://miorita.scoalaweb.ro/lessons/1-intro
// Ajut-o pe Miorița să ocolească gardul și să ajungă la pășune,
// folosind oricare din comenzile invățate la curs

reset();

turnRight();
move();
turnRight();
turnRight();
turnRight();
move();
move();
turnRight();
turnRight();
turnRight();
move();
turnRight();
turnRight();
turnRight();
move();

//varianta cu for

reset();

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 1; i++) {
  move();
}

for (let i = 0; i < 3; i++) {
  turnRight();
}

for (let i = 0; i < 2; i++) {
  move();
}

for (let i = 0; i < 3; i++) {
  turnRight();
}

for (let i = 0; i < 1; i++) {
  move();
}

for (let i = 0; i < 3; i++) {
  turnRight();
}

for (let i = 0; i < 1; i++) {
  move();
}
