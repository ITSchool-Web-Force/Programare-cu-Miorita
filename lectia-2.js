reset()
if ( canMove() ) {
        move()
        move()
        move()
}
else {
    turnLeft()
        move()
        turnRight()
        move()
        move()
        move()
}

fara else

reset()
if ( canMove() ) {
        move()
        move()
        move()
}
if ( !canMove() ) {
        turnLeft()
        move()
        turnRight()
        move()
        move()
        move()
}