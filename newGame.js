var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var ballStatus = 0;
var x = canvas.width / 2;
var y = canvas.height - 30;
var velocityY = -4;
var paddleHeight = 15;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickWidth = 75;
var brickHeight = 20;
var brickRowCount = 4;//Change this number lower or higher to adjust difficulty
var brickColumnCount = Math.floor(canvas.width/brickWidth) - 1;
var brickPadding = 10;
var brickOffsetVertical = 30;
var brickOffsetHorizontal = 25;

var bricks = [];
for (var i = 0; i < brickColumnCount; i++) {
    bricks[i] = [];
    for (var j = 0; j < brickRowCount; j++) {
        bricks[i][j] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyUnpressed, false);

function keyPressed(e) {
  /*
  */
    if (e.keyCode == "68") {
        rightPressed = true;
    }
    else if (e.keyCode == "65") {
        leftPressed = true;
    }
    else if (e.keyCode == 32){
      ballStatus = 1;
      x = paddleX + (paddleWidth / 2);
      y = canvas.height - 30;
    }
}



function keyUnpressed(e) {
  /*
  */
    if (e.keyCode == "68") {
        rightPressed = false;
    }
    else if (e.keyCode == "65") {
        leftPressed = false;
    }
}



function collisionDetection() {
  /*
  */
    for (var i = 0; i < brickColumnCount; i++) {
        for (var j = 0; j < brickRowCount; j++) {
            var b = bricks[i][j];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    b.status = 0;
                    ballStatus = 0;
                }
            }
        }
    }
}



function drawBall() {
  /*
  */
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}



function drawPaddle() {
  /*
  */
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}


function drawBricks() {
  /*
  */
    for (var i = 0; i < brickColumnCount; i++) {
        for (var j = 0; j < brickRowCount; j++) {
            if (bricks[i][j].status == 1) {
                var brickX = (i * (brickWidth + brickPadding)) + brickOffsetHorizontal;
                var brickY = (j * (brickHeight + brickPadding)) + brickOffsetVertical;
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


function draw() {
  /*
  */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();

    drawPaddle();
    collisionDetection();
    if (ballStatus == 1){
      drawBall();
      y += velocityY;
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }



}

var interval = setInterval(draw, 10);
