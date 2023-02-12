let ctx = gameCanvas.getContext("2d");
let x = [100,300,500];
let y = [0,0,0];
let speed = [4,8,6];
let dogX = 0; changeX = 0; score = 0;

let gameTimer = setInterval(mainLoop,20);

function mainLoop() {
    ctx.clearRect(0,0,640,480);
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 30);

    for (let n = 0; n < 3; n++) {
        ctx.drawImage(donut, x[n],y[n],80,80);
        y[n] += speed[n];
        checkForHits(n);
        if (y[n] > 480) {
            y[n] = -80;
            x[n] = Math.random()*600;
        }
    }
    ctx.drawImage(dog, dogX,400,80,80);
    dogX += changeX;
}

document.onkeydown = keyPressed;
function keyPressed(e) {
    let k = e.keyCode;
    if (k == 37) {changeX = -30;}
    if (k == 39) {changeX = 30;}
    if (k == 65) { 
        x.push(Math.random() * 600);
        y.push(-80);
        speed.push(Math.random() * 12 + 4);
}
}

function checkForHits(n) {
    if (Math.abs(400-y[n] < 60) && Math.abs(dogX-x[n]) < 60) {
        score += 1;
        y[n] = -80;
        x[n] = Math.random()*600;
        beep.play();
    }
}

setTimeout(gameOver,60000);
function gameOver() {
    clearInterval(gameTimer);
    ctx.font = "80px Arial";
    ctx.fillText("Game Over!",100,250);
}
