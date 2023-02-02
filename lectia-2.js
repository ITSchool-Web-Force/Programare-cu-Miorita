reset();
if (canMove()) {
    move();
    move();
    move();
} 
else {
    turnLeft();
    move();
    turnRight();
    move();
    move();
    move();
}