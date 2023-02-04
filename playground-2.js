// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

function pickHatchet() {
    pick("hatchet");
}
function dropHatchet() {
    drop("hatchet");
}


let i = 0;
    for(i=0;i<1;i++){
        move();
        pickHatchet();
        i=i+1;
        }
    for(i=1;i<6;i++){
        while(canMove()){
            move();
            i=i+1;
        }
        while(!canMove()){
            turnRight();
        }
        }
dropHatchet()