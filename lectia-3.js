reset();

let sheep;
sheep=canMove();

while(sheep)
{
    move();
    sheep=canMove();

    if(!sheep)
    {
      turnRight();
      sheep=canMove();
    }

}
