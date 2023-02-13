// https://miorita.scoalaweb.ro/lessons/1-intro
// Ajut-o pe Miorița să ocolească gardul și să ajungă la pășune, 
// folosind oricare din comenzile invățate la curs
reset();
function turnFast (times=1)
 {
    for(var i = 0; i < times; i++) {
        turnRight()
        }
    }

turnFast();
move();
turnFast(3);
while(canMove()){
    move();
    }
turnFast(3);
move();
turnFast(3);
move();
