// Pi Day Collisions
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/139-pi-collisions.html
// https://youtu.be/PoW8g67XNxA
// https://editor.p5js.org/codingtrain/sketches/4FuKfd-LJ

class Block {
  constructor(x, w, v, m, c) {
    this.x = x;
    this.y = height - w;
    this.width = w;
    this.velocity = v;
    this.mass = m;
    this.xConstrain = c;
  }

  collide (other){
    const notCollidingOnLeftSide = !(this.x > other.x + other.width);
    const notCollidingOnRightSide = !(this.x + this.width < other.x);
    return notCollidingOnLeftSide && notCollidingOnRightSide;
  }

  hitWall(){
    return this.x <= 0;
  }

  reverse(){
    this.velocity *= -1;
  }

  bounce (other){
    // elastic collision https://en.wikipedia.org/wiki/Elastic_collision
    const sumMass = this.mass + other.mass;
    const subMass = this.mass - other.mass;
    const fract1 = subMass / sumMass;
    const fract2 = 2 * other.mass / sumMass;
    const newVelocity = fract1 * this.velocity + fract2 * other.velocity;
    return newVelocity;
  }

  update(){
    this.x += this.velocity;
  }

  show() {
    const x = constrain(this.x, this.xConstrain, width);
    image(blockImg, x, this.y, this.width, this.width );
  }
}
