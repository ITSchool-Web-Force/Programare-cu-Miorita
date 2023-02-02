// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei


//versiunea 1 de rezolvare


function turnAround(){     
    if(canMove()){
        turnRight();
        turnRight();
    }
    if(!canMove()){
        turnRight();
        move();
        turnRight();
}
}

function walk(parametru){
for(let i=0;i<parametru;i++){
    move();
}
}
function moveAroundFence(paramFence) {
for(let i=0;i<paramFence;i++){
turnRight();
move();
turnRight();
}
}

function pickHatchet() {
pick("hatchet");
}
function dropHatchet() {
drop("hatchet");
}

function main(){
turnAround();
walk(5);
moveAroundFence(1);
walk(4);
pickHatchet();
turnAround();
walk(4);
turnLeft();
walk(1);
turnLeft();
walk(6);
dropHatchet();
}
