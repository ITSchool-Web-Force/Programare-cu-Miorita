// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

reset();

function continuousMovement(run) {
  for (let i = 0; i < run; i++) {
    move();
  }
}

function pickHatchet(hatcketCollect) {
  for (let i = 0; i < hatcketCollect; i++) {
    pick("hatchet");
  }
}

continuousMovement(1);
pickHatchet(1);
continuousMovement(3);
turnRight();
continuousMovement(4);
drop("hatchet");
