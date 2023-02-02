reset()
while(canMove()) {
        move()
        if(!canMove()) {
        turnRight()
        }
}