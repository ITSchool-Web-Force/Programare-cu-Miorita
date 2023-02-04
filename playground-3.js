// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.

let i = 0;
for(i=1;i<3;i++){
    while(canMove()){
        move();
        i=i+1;
    }
    while(!canMove()){
        turnRight();
    }
}