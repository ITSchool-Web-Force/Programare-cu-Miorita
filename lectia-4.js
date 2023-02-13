// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
reset();
  function fastMove(times = 1)
    {
        for(var i = 0; i < times; i++) {
            move()
        }
    }

function turnFast (times=1)
 {
    for(var i = 0; i < times; i++) {
        turnRight()
        }
    }

turnFast(2);
fastMove(5);
turnFast();
move();
turnFast();
fastMove(4);
pick("hatchet");
turnFast(2);
fastMove(4);
turnFast(3);
move();
turnFast(3);
fastMove(5);
drop("hatchet");