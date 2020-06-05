
// run seerver with Ctrl+Shift+L

const drops = [];
const numberDrops = 500

function setup() {
  createCanvas(640, 260);
  for (let i = 0; i < numberDrops ; i++){
    drops[i] = new Drop();
  }

}

function draw() {
  background(230, 230, 250)
  for (let i = 0; i < numberDrops ; i++){
    drops[i].fall();
    drops[i].show();
  }
}
