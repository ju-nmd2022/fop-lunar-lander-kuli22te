background(14, 42, 84);

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
  rect(0, 340, 1200, 240);
}

ground();

//Ship

push();
ellipse(-25, -30, 50, 80);
fill(225);
rect(-39, -60 + 10, 30, 10, 5);
pop();

// start pad
