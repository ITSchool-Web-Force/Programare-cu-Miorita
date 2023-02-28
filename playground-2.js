// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
function main() {
  reset();
  goToHatchet();
  pick("hatchet");
  goToVitoria();
  drop("hatchet");
}
function goToHatchet() {
  move();
}
function goToVitoria() {
  superMove(3);
  turnRight();
  superMove(4);
}
function superMove(times = 1) {
  var steps = times;
  while (steps > 0) {
    move();
    steps = steps - 1;
  }
}
