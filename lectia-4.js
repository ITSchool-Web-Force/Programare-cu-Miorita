// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

function main() {
  reset();
  goToHatchet();
  pick("hatchet");
  goToVitoria();
  drop("hatchet");
}
function goToHatchet() {
  turnAround();
  superMove(5);
  turnRight();
  move();
  turnRight();
  superMove(4);
}
function goToVitoria() {
  turnAround();
  superMove(4);
  turnLeft();
  move();
  turnLeft();
  superMove(6);
}
function turnAround() {
  turnRight();
  turnRight();
}
function superMove(times = 1) {
  var steps = times;
  while (steps > 0) {
    move();
    steps = steps - 1;
  }
}
