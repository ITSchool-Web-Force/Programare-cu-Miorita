// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

reset();
    function superMove(times = 1)
    {
        for (let i = 0; i < times; i = i+1) {
            move()
        }
    }

    move();
    pick("hatchet");
    superMove(3);
    turnRight();
    superMove(4);
    drop("hatchet");