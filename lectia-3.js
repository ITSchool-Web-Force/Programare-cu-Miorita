reset()
while(canMove()) {
        move()
        if(!canMove()) {
                turnRight()
        }
}


Fara else mai jos:

while(canMove()) {
        move()
        if(!canMove() ) {
            turnRight()
        }
    }

    var iteration = 1

    while (iteration < 7) {
        move()
        iteration = iteration + 1;
    }

    for (var i = 1; i < 7; i = i + 1) {
        move()
    }
