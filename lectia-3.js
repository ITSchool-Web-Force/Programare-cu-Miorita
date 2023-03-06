reset();
var sheep = canMove();
while (sheep) {
    sheep = canMove();
    if (!sheep) {
        turnRight();
        sheep = canMove();
    }
    else 
        move();
}