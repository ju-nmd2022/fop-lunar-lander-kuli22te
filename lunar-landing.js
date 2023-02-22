background(14, 42, 84);

let x = 200;
let y = 250;

//Stars array

let starA = [];
let starB = [];

//Forloop stars and position
for (let i = 0; i < 1250; i++) {
  const a = Math.floor(Math.random() * width);
  const b = Math.floor(Math.random() * height);

  starA.push(a);
  starB.push(b);
}

//Design stars
function stars() {
  noStroke();
  fill(255);
  for (let index in starA) {
    ellipse(starA[index], starB[index], 3);
  }
}

stars();

//ground

function ground() {
  fill(101, 94, 94);
  stroke(101, 94, 94);
  rect(x - 210, y + 90, x + 1000, y - 10);
}

ground();

//Space ship body

fill(51, 51, 51);
stroke(51, 51, 51);
ellipse(x, y, x - 150, y - 170);

//landing pad

fill(45, 41, 41);
rect(x + 300, y + 5, x - 70, y - 220, 10);

// Rainbow trees

//red
fill(214, 26, 26);
noStroke();
rect(x - 110, y + 60, x - 188, y - 140);

//yellow

fill(228, 195, 76);
noStroke();
rect(x - 98, y + 60, x - 188, y - 140);

//Green

fill(106, 228, 76);
noStroke();
rect(x - 86, y + 60, x - 188, y - 140);

//Blue

fill(76, 109, 228);
noStroke();
rect(x - 74, y + 60, x - 188, y - 140);

//Purple

fill(143, 76, 228);
noStroke();
rect(x - 62, y + 60, x - 188, y - 140);

//Pink

fill(216, 76, 228);
noStroke();
rect(x - 50, y + 60, x - 188, y - 140);

//Cloud

//Cloud ball left

fill(255);
noStroke();
ellipse(x - 105, y + 30, x - 140, y - 190);

//Cloud ball middle

fill(255);
noStroke();
ellipse(x - 70, y + 20, x - 140, y - 190);

//Cloud ball right

fill(255);
noStroke();
ellipse(x - 40, y + 30, x - 140, y - 190);

//Cloud ball bottum

fill(255);
noStroke();
ellipse(x - 72, y + 45, x - 90, y - 200);
