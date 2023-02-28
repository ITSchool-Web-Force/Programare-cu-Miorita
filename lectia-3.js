// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei
// Poți folosi oricare din conceptele învățate la curs, chiar și de la lecția a 4-a.
reset();

for (i = 0; i < 6; i++) move();
for (moves = 6; moves > 0; moves = moves - 1) {
  turnRight();
  for (i = 0; i < moves; i++) move();
  turnRight();
  for (i = 0; i < moves; i++) move();
}
