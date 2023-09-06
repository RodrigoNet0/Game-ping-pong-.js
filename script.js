let x, y, speed;
let paddleX, paddleY;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  speed = 2
  paddleX = 20;
  paddleY = height/2 - 50;
}

function draw() {
  background(222)
  noStroke()
  fill(255, 0, 0)
  rect(x, y, 10, 10)
  
  rect(paddleX, paddleY, 10, 100)
  x += speed;
  if(x > width -25) {
    speed *= -1
  }
  if(paddleY  <= 0) {
    paddleY = 0
  }
  if(paddleY  > height -100) {
    paddleY = height - 100
  }
  // 
  if(x + 10 > paddleX &&
    x < paddleX + 10 &&
    y + 10 > paddleY &&
    y < paddleY + 100 
    )  {
    speed *= -1
  }
}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    paddleY -= 20
  }
  if(keyCode === RIGHT_ARROW) {
    paddleY += 20
  }
}
