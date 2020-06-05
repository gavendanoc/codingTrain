// run seerver with Ctrl+Shift+L


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(228);
  sevenSegment();
}

function sevenSegment(){
  push();
  stroke(0);
  noFill();
  rect(40, 20, 98, 18);
  rect(140, 40, 18, 98);
  rect(140, 160, 18, 98);
  rect(40, 260, 98, 18);
  rect(20, 160, 18, 98);
  rect(20, 40, 18, 98);
  rect(40, 140, 98, 18);

  pop();
}
