reset();
var free = canMove();
while (free) {
    free = canMove();
    if (!free) {
        turnRight();
        free = canMove();
    }
    else 
        move();
}

//varianta 2 inspirata de pe youtube :) // 

reset()
for (let i = 0; i < 6; i = i+1) move()
turnRight();

for (let moves = 6; moves > 1; moves = moves-1){
    for (let i = 0; i < moves; i = i+1) move() 
    turnRight(); 
    for (let i = 0; i < moves; i = i+1) move() 
    turnRight();
    }
move();
turnRight();
move();