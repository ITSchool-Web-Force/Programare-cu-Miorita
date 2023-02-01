reset();

let sheep=canMove();

while(sheep)
{
    move();
    if(!canMove())
    {
      turnRight();
    }
}
