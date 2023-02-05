reset();

function moveSet()
{
    move();
    move();
    move();
}
function turnAround()
{
    turnRight();
    turnRight();
    turnRight();
  }

if (canMove())
{
    moveSet();
}
else {
    turnAround();
    move();
    turnRight();
    moveSet();
}