// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

// variante luuunga // 
reset ();
turnLeft();
turnLeft();
move();
move();
move();
move();
move();
turnRight();
move();
turnRight();
move();
move();
move();
move();
pick("hatchet");
turnLeft();
turnLeft();
move();
move();
move();
move();
turnLeft();
move();
turnLeft();
move();
move();
move();
move();
move();
drop("hatchet");

/* varianta mai scurta de pe site. am incercat sa formatez codul mai frumos dar se 
strica foarte tare
*/ 

reset();
function turnAround()
    {
    turnRight()
    turnRight()
    }
function superMove(times = 1)
    {
    for (let i=0; i < times; i = i+1) 
        { 
        move()
        }
    }
    turnAround();
    superMove(5);
    turnRight(); 
    superMove(); 
    turnRight();
    superMove(4); 
    pick("hatchet");
    turnAround();
    superMove(4);
    turnAround();
    turnRight();
    move();
    turnAround();
    turnRight();
    superMove(5);
    drop("hatchet");