// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

reset();
let i=1;
move();
pick("hatchet");
while(canMove()){
    move();
    if(!canMove() && i<2){
        turnRight();
        i++;
        continue;
    }  
}
drop("hatchet");