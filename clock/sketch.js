// run seerver with Ctrl+Shift+L

const pink = [255, 100, 150];
const purple = [150, 100, 255];
const green = [150, 255, 100];


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  const hr = hour();
  const mn = minute();
  const sc = second();
  const angleSeconds = map(sc, 0, 60 , 0, 360);
  const angleMinutes = map(mn, 0, 60, 0, 360);
  const angleHours = map(hr % 12, 0, 12, 0, 360);


  // draw arcs

  strokeWeight(6);
  stroke(pink);
  noFill();
  arc(0, 0, 300, 300, 0, angleSeconds);

  stroke(purple);
  arc(0, 0, 280, 280, 0, angleMinutes);

  stroke(green);
  arc(0, 0, 260, 260, 0, angleHours);

  // draw lines

  // push and pop allow rotation only on this line
  push();
  rotate(angleSeconds);
  stroke(pink);
  line (0, 0, 100, 0);
  pop();

  push();
  rotate(angleMinutes);
  stroke(purple);
  line (0, 0, 75, 0);
  pop();

  push();
  rotate(angleHours);
  stroke(green);
  line (0, 0, 50, 0);
  pop();

  // center point
  stroke(255);
  point(0, 0)

}
