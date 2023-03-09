// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei
reset();
let i=1;
while(canMove()){
    move();
    if(!canMove() && i<5){
        turnRight();
        i++;
        continue;
    }  
}