// run seerver with Ctrl+Alt+L
let angle;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);

  angle = slider.value();

  stroke(255);

  // moves (0, 0) origin to point (200, 400)
  // point (0, 400) will be the origin
  translate(200, height);

  branch(100);
}


function branch (length) {
  line (0, 0, 0, -length);

  // moves origin to the top
  translate(0, -length);


  if (length > 4){

    push(); // only use rotation in this section
    rotate(angle);
    branch(length * 2.0 / 3.0);
    pop(); // restore state before push()

    push();
    rotate(-angle);
    branch(length * 2.0 / 3.0);
    pop();
  }
}
