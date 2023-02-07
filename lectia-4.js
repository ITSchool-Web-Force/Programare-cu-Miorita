// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

reset();

function turnAround(numberOfTurns = 1) {
  for (let i = 0; i < numberOfTurns; i++) {
    turnRight();
  }
}

function continuousMovement(run) {
  for (let i = 0; i < run; i++) {
    move();
  }
}

function crossTheFence(jumpFence) {
  for (let i = 0; i < jumpFence; i++) {
    turnRight();
    move();
    turnRight();
  }
}

turnAround(2);
continuousMovement(5);
crossTheFence(1);
continuousMovement(4);
pick("hatchet");
turnAround(2);
continuousMovement(4);
turnAround(3);
continuousMovement(1);
turnAround(3);
continuousMovement(6);
drop("hatchet");
