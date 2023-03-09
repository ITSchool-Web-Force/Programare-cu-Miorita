// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

reset();

function turn(){
    turnRight()
    turnRight()
}

function movemore(times){
    for( var i=1;i<=times;i++){
        move();
    }
}

    turn()

    movemore(5)

    turnRight() 
    movemore(1)
    turnRight()

    movemore(4)
    pick("hatchet")
    turn()
    movemore(4)
    turnLeft()
    move()
    turnLeft();
    movemore(6)
    drop("hatchet")
