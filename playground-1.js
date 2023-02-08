// https://miorita.scoalaweb.ro/playgrounds/index
// Fă-o pe Miorița să ajungă în fiecare din cele 4 colțuri ale stânei

//aici am vazut ca pot folosi acelasi cod de la lectia 3, doar ca merge la infinit si nu stiu sa il opresc //

reset();
var free = canMove();
while (free) {
    free = canMove();
    if (!free) 
    {
        turnRight();
        free = canMove();
    }
    else 
    move();
    
}