// https://youtu.be/PoW8g67XNxA

let blockImg;
let block1;
let block2;
let clack;
let countDiv;
let count = 0;
let digits = 6;

// to solve the problem of discrete time steps
// https://en.wikipedia.org/wiki/Euler_method
const timeSteps = 1e4;

function preload() {
  blockImg = loadImage('block.png');
  clack = loadSound('clack.wav');
}

function setup() {
  const m2 = pow(100, digits-1);
  createCanvas(windowWidth, 200);
  block1 = new Block(100, 20, 0, 1, 0);
  block2 = new Block(200, 150, -5/timeSteps, m2, 20);
  countDiv = createDiv(count);
  countDiv.style('font-size', '72pt');
}

function draw() {
  background(200);

  let clackSound = false;

  for (let i = 0; i < timeSteps; i++){
    if(block1.collide(block2)){
      const v1 = block1.bounce(block2);
      const v2 = block2.bounce(block1);
      block1.velocity = v1;
      block2.velocity = v2;
      clackSound = true;
      count++;
    }
    if(block1.hitWall()){
      block1.reverse();
      clackSound = true;
      count++;
    }
    block1.update();
    block2.update();
  }

  if (clackSound) clack.play();
  block1.show();
  block2.show();

  countDiv.html(nf(count, digits));
}
