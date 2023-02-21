// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei
// Poți folosi oricare din conceptele învățate la curs, chiar și de la lecția a 4-a.

reset();

//varianta cu while

let furryThing;
furryThing = canMove();

while (furryThing) {
  if (!canMove()) {
    turnRight();

    if (!canMove()) {
      break;
    }
  }
  move();
}

//varianta mai scurta cu for
reset();

let letNumberOfSteps = [
  6, 1, 6, 1, 6, 1, 5, 1, 5, 1, 5, 1, 4, 1, 4, 1, 3, 1, 3, 1, 2, 1, 2, 1, 1, 1,
  1,
];
// array cu numar de pasi + acel 1 (de la fiecare rotatie catre dreapta)
for (let lane = 0; lane < letNumberOfSteps.length; lane++) {
  for (let i = 0; i < letNumberOfSteps[lane]; i++) {
    move();
    if (!canMove()) {
      turnRight();
    }
  }
  if (!canMove()) {
    break;
  }
}

//varianta mai lunga cu for

reset();

for (let i = 0; i < 6; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 6; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 6; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 5; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 5; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 4; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 4; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 3; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 3; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 2; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 2; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 1; i++) {
  move();
}

for (let i = 0; i < 1; i++) {
  turnRight();
}

for (let i = 0; i < 1; i++) {
  move();
}
