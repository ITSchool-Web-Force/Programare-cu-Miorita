reset();

let turnRightCount = 0;

while (turnRightCount < 12) {
  if (canMove()) {
    move();
  } else {
    turnRight();
    turnRightCount++;
    if (turnRightCount === 12) {
      break;
    }
    if (canMove()) {
      move();
    } else {
      break;
    }
  }
}
move();
