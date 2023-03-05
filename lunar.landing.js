//background
background(4, 22, 44);

// stars
let starA = [];
let starB = [];

for (let i = 0; i < 1250; i++) {
  const a = Math.floor(Math.random() * width);
  const b = Math.floor(Math.random() * height);

  starA.push(a);
  starB.push(b);
}

// stars

function stars() {
  noStroke();
  fill(225);
  for (let index in starA) {
    ellipse(starA[index], starB[index], 3);
  }
}

// ground

function ground() {
  noStroke();
  fill(101, 94, 94);
  rect(0, 500, 1200, 1200);
}

//spaceship

function spaceship(spaceshipX, spaceshipY) {
  push();
  translate(spaceshipX, spaceshipY);
  fill(51, 51, 51);
  noStroke();
  ellipse(-25, -35, 50, 80);
  fill(225);
  noStroke();
  rect(-39, -60 + 10, 30, 10, 5);
  pop();
}

//rainbow trees

//Restart function

function restart() {
  spaceshipX = 350;
  spaceshipY = 0;
  gameState = "start";
  rotation = 0;
  speed = 0;
}

//Functions to display first screen

function start() {
  clear();
  stars();
  ground();
  textSize(30);
  fill(143, 76, 228);
  text("Start playing by clicking your mose", 90, 255);
}

// Game settings
const gravity = 0.16;
const groundlevel = 300;
let spaceshipX = 350;
let spaceshipY = 0;
let gameState = "start";
let rotation = 0;
let speed = 0;

// game functions

function gameMechanics() {
  clear();
  stars();
  ground(groundlevel);
  spaceship(spaceshipX, spaceshipY);

  if (keyIsDown(38)) {
    speed = speed - 0.6;
  }

  speed = speed + gravity;
  spaceshipY = spaceshipX + Math.cos(rotation) * speed;
  spaceshipX = spaceshipX - Math.sin(rotation) * speed;

  if (spaceshipY - 205 > groundlevel) {
    if (
      spaceshipX <= groundlevel + 55 &&
      spaceship >= groundlevel - 10 &&
      speed <= 5
    ) {
      spaceshipY = groundlevel + 205;
      gameState = "win";
    } else {
      clear();
      stars();
      ground(groundlevel);
      gameState = "lose";
    }
  }
}

// if win and restart

function win() {
  textSize(80);
  fill(106, 228, 76);
  text("YOU WIN", 155, 205);

  textSize(40);
  text("Press space to restart", 146, 275);
  if (keyIsDown(32)) {
    restart();
  }
}

// If lose and restart
function lose() {
  textSize(40);
  fill(214, 25, 25);
  text("YOU LOSE", 130, 205);

  textSize(40);
  text("Press space to restart", 146, 275);
  if (keyIsDown(32)) {
    restart();
  }
}

//function play game
function mouseClicked() {
  gameState = "game";
}

//GameStates deciding which screen to show

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
