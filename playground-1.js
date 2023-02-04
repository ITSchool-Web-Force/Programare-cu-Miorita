// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei

function moveTheSheep(par){
    for(i=0;i<par;i++){

    while(canMove()){
        move()
    }
    if(!canMove()){
        turnRight()
    }
}
}
moveTheSheep(5)