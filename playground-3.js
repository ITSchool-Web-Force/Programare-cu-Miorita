// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.

reset();
let i=1;
turnRight();
turnRight();
turnRight();
while(canMove()){
    move();
    if(!canMove() && i<5){
        turnRight();
        i++;
        continue;
    }  
}