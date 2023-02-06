// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

//
reset();

function steps(nrSteps) {
  for (let i = 0; i < nrSteps; i++) {
    move();
  }
}

let executed = false;

function main() {
  if (executed) {
    return;
  }

  executed = true;
  steps(1);
  pick("hatchet");
  steps(3);
  turnRight();
  steps(3);
  drop("hatchet");
}

main();
