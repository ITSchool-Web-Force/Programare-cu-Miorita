// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei
while(true){

    while(canMove()){
        move();
        }
    
    while(!canMove()){
        turnRight();
        }
    }
    