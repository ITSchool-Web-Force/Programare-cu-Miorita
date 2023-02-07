// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.


//variante mai scurta// 
reset();
var free = canMove();
while (!free) {
    turnRight();
    free = canMove();
}
while (free) {
    move();
    free = canMove();
    if (!free) {
        break;
    }
}





reset();
var free = canMove();
while (!free) {
    turnRight();
    free = canMove();
    if (free) {
        move();
        break;
    }
    else {
        turnRight();
    }
    free = canMove();
}
while (free) {
    free = canMove();
    if (!free) {
        break;
    }
    else {
        move();
        free = canMove();
            if (!free) 
                break;
            else 
                move();
    }
 }


