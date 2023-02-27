background(4, 22, 44);

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

stars();

// ground

function ground() {
  noStroke();
  fill(101, 94, 94);
  rect(0, 440, 1200, 140);
}

ground();
