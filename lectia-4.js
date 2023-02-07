reset();

function turnAround(direction = true) {
    if(direction) {
        turnLeft();
        turnLeft();
    }
    else {
        turnRight();
        turnRight();
    }
}

function superMove(times = 1)
{
    for(let i = 0; i < times; i = i+1) {
        move();
    }
}

function goAroundFence(direction = true) {
    if(direction) {
        turnRight();
        move();
        turnRight();
    }
    else {
        turnLeft();
        move();
        turnLeft();
    }
}

function main() {
    turnAround();
    superMove(5);
    goAroundFence();
    superMove(4);
    pick("hatchet");
    turnAround();
    superMove(4);
    goAroundFence(direction = false);
    superMove(6);
    drop("hatchet");
}
