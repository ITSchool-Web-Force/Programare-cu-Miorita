// https://miorita.scoalaweb.ro/lessons/2-if
// Scrie un program care să o ajute pe Miorița să ajungă la oricare din pășuni
// Programul trebuie să funcționeze și cu gard, și fără gard
reset();
if(!canMove())
{turnLeft();
move();
turnRight();
move();
move();
move();
}
else
{move();
move();
move();
}