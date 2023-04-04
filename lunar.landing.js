//Game "settings"
const gravity = 0.15;
const groundlevel = 300;
let spaceshipX = 350;
let spaceshipY = 0;
let gameState = "start";
let rotation = 0;
let speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  background(4, 22, 44);
}

//Stars array variable
let starU = [];
let starZ = [];

// Forloop creating stars and deciding random position
for (let i = 0; i < 800; i++) {
  const u = Math.floor(Math.random() * 1500);
  const z = Math.floor(Math.random() * 1200);

  starU.push(u);
  starZ.push(z);
}

//look of stars
function stars() {
  noStroke();
  fill(255);
  for (let index in starU) {
    ellipse(starU[index], starZ[index], 3);
  }
}

//Planet
function planet() {
  fill(101, 94, 94);
  rect(0, 500, 1526, 800);
}

//Spaceship
function spaceship(spaceshipX, spaceshipY) {
  push();
  translate(spaceshipX, spaceshipY);
  fill(51, 51, 51);
  ellipse(400, -30, 50, 80);
  fill(225);
  rect(385, -60 + 10, 30, 10, 5);
  pop();
}
// Big trees starting from the left

// Tree1

function tree1() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(90, 450, 10, 90);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(100, 450, 10, 90);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(110, 450, 10, 90);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(120, 450, 10, 90);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(130, 450, 10, 90);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(140, 450, 10, 90);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(88, 435, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(120, 425, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(150, 435, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(119, 443, 100, 50);
}

// Tree2

function tree2() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(430, 550, 10, 90);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(440, 550, 10, 90);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(450, 550, 10, 90);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(460, 550, 10, 90);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(470, 550, 10, 90);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(480, 550, 10, 90);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(433, 535, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(463, 525, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(493, 535, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(462, 543, 99, 50);
}

// Tree3

function tree3() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(1130, 450, 10, 90);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(1140, 450, 10, 90);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(1150, 450, 10, 90);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(1160, 450, 10, 90);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(1170, 450, 10, 90);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(1180, 450, 10, 90);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(1130, 435, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(1162, 425, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(1192, 435, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(1160, 443, 100, 50);
}

// Tree4

function tree4() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(1350, 600, 10, 90);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(1360, 600, 10, 90);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(1370, 600, 10, 90);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(1380, 600, 10, 90);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(1390, 600, 10, 90);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(1400, 600, 10, 90);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(1350, 585, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(1382, 575, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(1412, 585, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(1380, 593, 100, 50);
}

// Small trees starting from the right

// Tree4

function tree5() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(220, 630, 8, 90);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(228, 630, 8, 90);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(236, 630, 8, 90);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(244, 630, 8, 90);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(252, 630, 8, 90);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(260, 630, 8, 90);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(215, 623, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(246, 609, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(277, 623, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(245, 633, 100, 50);
}

function tree6() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(730, 600, 8, 80);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(738, 600, 8, 80);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(746, 600, 8, 80);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(754, 600, 8, 80);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(762, 600, 8, 80);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(770, 600, 8, 80);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(730, 600, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(757, 587, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(785, 600, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(757, 612, 88, 40);
}

function tree7() {
  //red
  fill(214, 26, 26);
  noStroke();
  rect(968, 560, 8, 80);

  //yellow

  fill(228, 195, 76);
  noStroke();
  rect(976, 560, 8, 80);

  //Green

  fill(106, 228, 76);
  noStroke();
  rect(984, 560, 8, 80);

  //Blue

  fill(76, 109, 228);
  noStroke();
  rect(992, 560, 8, 80);

  //Purple

  fill(143, 76, 228);
  noStroke();
  rect(1000, 560, 8, 80);

  //Pink

  fill(216, 76, 228);
  noStroke();
  rect(1008, 560, 8, 80);

  //Cloud

  //Cloud ball left

  fill(255);
  noStroke();
  ellipse(970, 550, 45, 45);

  //Cloud ball middle

  fill(255);
  noStroke();
  ellipse(990, 540, 45, 45);

  //Cloud ball right

  fill(255);
  noStroke();
  ellipse(1010, 550, 45, 45);

  //Cloud ball bottum

  fill(255);
  noStroke();
  ellipse(990, 558, 80, 40);
}

//Fuinction to restart the game
function reset() {
  spaceshipX = 350;
  spaceshipY = 0;
  gameState = "start";
  rotation = 0;
  speed = 0;
}

// Function to show start screen (first screen)
function start() {
  clear();
  background(4, 22, 44);
  stars();
  planet();
  tree1();
  tree2();
  tree3();
  tree4();
  tree5();
  tree6();
  tree7();
  textSize(30);
  fill(143, 76, 228);
  text("Start playing by clicking your mouse", 540, 255);
}

//game functions
function gameMechanics() {
  clear();
  background(4, 22, 44);
  stars();
  planet(groundlevel);
  tree1();
  tree2();
  tree3();
  tree4();
  tree5();
  tree6();
  tree7();
  spaceship(spaceshipX, spaceshipY);

  if (keyIsDown(38)) {
    speed = speed - 0.6;
  }

  speed = speed + gravity;
  spaceshipY = spaceshipY + Math.cos(rotation) * speed;
  spaceshipX = spaceshipX - Math.sin(rotation) * speed;

  if (spaceshipY - 205 > groundlevel) {
    if (
      spaceshipX <= groundlevel + 55 &&
      spaceshipX >= groundlevel - 10 &&
      speed <= 5
    ) {
      spaceshipY = groundlevel + 205;
      gameState = "win";
    } else {
      clear();
      background(4, 22, 44);
      stars();
      planet(groundlevel);
      gameState = "lose";
    }
  }
}

//If win and restart
function win() {
  textSize(80);
  fill(106, 228, 76);
  text("YOU WIN", 555, 205);

  textSize(40);
  text("press space to restart", 546, 275);
  if (keyIsDown(32)) {
    reset();
  }
}

// If lose and restat
function lose() {
  textSize(80);
  fill(214, 25, 25);
  text("YOU LOSE", 530, 205);

  textSize(40);
  text("press space to restart", 546, 275);
  if (keyIsDown(32)) {
    reset();
  }
}

// Function to play the game
function mouseClicked() {
  gameState = "game";
}

// Different gamestates deciding what screen to show
function draw() {
  if (gameState === "start") {
    start();
  } else if (gameState === "game") {
    gameMechanics();
  } else if (gameState === "win") {
    win();
  } else if (gameState === "lose") {
    lose();
  }
}
