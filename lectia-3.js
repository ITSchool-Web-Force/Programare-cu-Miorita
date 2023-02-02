// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei
// Poți folosi oricare din conceptele învățate la curs, chiar și de la lecția a 4-a.

reset();

let furryThing;
furryThing = canMove();

while (furryThing) {
  let fuzzyThing;
  fuzzyThing = canMove();

  if (!fuzzyThing) {
    turnRight();
    continue;
  }
  //momentan parcurge traseul pana la final si apoi ruleaza la infinit
  move();
}
