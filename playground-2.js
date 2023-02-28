// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
move();
pick("hatchet");
turnRight();
while(canMove())
{
    move();
}
turnLeft();

while(canMove())
{
    move();
}
drop("hatchet");