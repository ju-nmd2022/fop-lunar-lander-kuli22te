//Looks of the lander
function ship(shipX, shipY, rotation) {
  push();
  translate(shipX, shipY);
  rotate(rotation);
  fill(51, 51, 51);
  stroke(51, 51, 51);
  ellipse(x, y, x - 150, y - 170);
  pop();
}
