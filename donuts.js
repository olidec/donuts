let ctx = gameCanvas.getContext("2d");
let x = [100,300,500];
let y = [0,0,0];
let speed = [1,4,2];
let dogX = 0; changeX = 0; score = 0;

let gameTimer = setInterval(mainLoop,20);



function mainLoop() {
    ctx.clearRect(0,0,640,480);
    ctx.font = "30px Arial";
   

    for (let n = 0; n < 3; n++) {
        ctx.drawImage(donut, x[n],y[n],80,80);
        y[n] += speed[n];
        checkForHits(n);
        if (y[n] > 480) {
            y[n] = -80;
            x[n] = Math.random()*600;
            score -= 5;
        }
    }
    ctx.drawImage(dog, dogX,400,80,80);
    dogX += changeX;
    ctx.fillText("Score: " + score, 10, 30);
    if(score >= 20){

        gameOver();
    }
    
}

document.onkeydown = keyPressed;
function keyPressed(e) {
    let k = e.keyCode;
    if (k == 37) {changeX = -5;}
    if (k == 39) {changeX = 5;}
}

document.onkeyup = keyLifted;

function keyLifted(e){
    let k = e.keyCode;
    if (k == 37) {changeX = 0;}
    if (k == 39) {changeX = 0;}
}

function checkForHits(n) {
    if (Math.abs(400-y[n] < 60) && Math.abs(dogX-x[n]) < 60) {
        score += 1;
        y[n] = -80;
        x[n] = Math.random()*600;
        beep.play();
    }
}


//setTimeout(gameOver,60000);
function gameOver() {
    clearInterval(gameTimer);
    ctx.font = "80px Arial";
    ctx.fillText("Game Over!",100,250);
}