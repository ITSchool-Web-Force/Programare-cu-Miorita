// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

// este vreo problema daca am facut in modul asta ?

reset();

function turnAround(direction = true) {
  if (direction) {
    turnRight();
    turnRight();
  } else {
    turnLeft();
    turnLeft();
  }
}

function steps(nrSteps) {
  for (let i = 0; i < nrSteps; i++) {
    move();
  }
}

function changeLine(direction) {
  if (direction == "right") {
    turnRight();
    move();
    turnRight();
  } else {
    turnLeft();
    move();
    turnLeft();
  }
}

function pickHatchet() {
  pick("hatchet");
}

function dropHatchet() {
  drop("hatchet");
}

function helpMiorita() {
  turnAround();
  steps(5);
  changeLine("right");
  steps(4);
  pickHatchet();
  turnAround();
  steps(4);
  changeLine();
  steps(5);
  dropHatchet();
}

helpMiorita();
