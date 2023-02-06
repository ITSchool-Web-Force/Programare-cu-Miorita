// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei

reset();

function firstSteps() {
  while (canMove()) {
    move();
  }
  if (!canMove()) {
    turnRight();
  }
}

function steps(nrSteps) {
  for (let i = 0; i < nrSteps; i++) {
    move();
  }
}

function turnMiorita(direction) {
  if (direction == "right") {
    turnRight();
  }
  if (direction == "left") {
    turnLeft();
  }
}

function main() {
  firstSteps();
  steps(3);
  turnMiorita("right");
  steps(5);
  turnMiorita("right");
  steps(6);
  turnMiorita("left");
  steps(1);
  turnMiorita("left");
  steps(3);
  turnMiorita("left");
  steps(3);
}
