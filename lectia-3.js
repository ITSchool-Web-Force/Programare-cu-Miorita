// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei
// Poți folosi oricare din conceptele învățate la curs, chiar și de la lecția a 4-a.
function go(){
    while(canMove())
    {
        move();
        if(!canMove()){
            turnRight();
            continue;
        }
    }
    
}
    
    go();
//nu merge cu functie