// run seerver with Ctrl+Shift+L

let pi = 4;
let iterations = 0;
let div;

const history = [];
const minY = 2;
const maxY = 4;

function setup() {
  createCanvas(600, 400);

  div = createDiv('');
  frameRate(100);
}

function draw() {
  background(0);

  let den = iterations * 2  +3;
  let frac = 1 / den;
  if (iterations % 2 == 0){
    pi -= (4 / den);
  } else {
    pi += (4 / den);
  }

  history.push(pi);
  let piY = map(PI, minY, maxY, height, 0);
  line(0, piY, width, piY);
  let spacing = width / history.length;
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < history.length; i++){
    let x = i * spacing;
    let y = map(history[i], minY, maxY, height, 0);
    vertex(x, y);
  }
  endShape();


  div.html(pi)
  iterations++;
}
