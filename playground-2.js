// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
reset();
move();
pick("hatchet");
while(canMove()){
    move();
    }

turnRight();

function fastMove(times = 1)
{
    for(var i = 0; i < times; i++) {
        move()
       }
    }

fastMove(3);
drop("hatchet");
