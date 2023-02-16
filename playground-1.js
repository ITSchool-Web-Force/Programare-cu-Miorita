
let count = 0;

while (canMove()) {
    move();
    count++;

    if (!canMove())
{
    turnRight();

}
    if (count==27){
    turnRight();
    move();
    move();
    move();
    break;
    }
}
