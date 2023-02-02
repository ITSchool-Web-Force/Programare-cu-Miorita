function turn()
{
    turnRight()
    turnRight()
}

function moveAlot(times = 1)
{
    for(var i=0; i < 1; i = i+1) {
        move()
    }
}

reset()
turn()
moveAlot(5)
turnRight()
move()
turn()
moveAlot(4)
pick("hatchet")
turn()
moveAlot(4)
turnLeft()
move()
turnLeft()
moveAlot(6)
drop("hatchet")

