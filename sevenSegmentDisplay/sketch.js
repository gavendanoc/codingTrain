// run seerver with Ctrl+Shift+L

let iterations = 0;
let numbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  iterations = iterations % numbers.length;
  background(240);
  sevenSegment(numbers[iterations]);
  iterations++;
}

function getColor(val, shift){
  let a = 200 * ((val >> shift) & 1);
  return color(255, 0, 0, a);
}

function sevenSegment(val){
  push();
  stroke(0);
  noFill();

  // A
  fill(getColor(val, 6));
  rect(40, 20, 98, 18);
  // B
  fill(getColor(val, 5));
  rect(140, 40, 18, 98);
  // C
  fill(getColor(val, 4));
  rect(140, 160, 18, 98);
  // D
  fill(getColor(val, 3));
  rect(40, 260, 98, 18);
  // E
  fill(getColor(val, 2));
  rect(20, 160, 18, 98);
  // F
  fill(getColor(val, 1));
  rect(20, 40, 18, 98);
  // G
  fill(getColor(val, 0));
  rect(40, 140, 98, 18);

  pop();
}
