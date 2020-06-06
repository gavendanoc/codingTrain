function Drop () {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 4, 10);
  this.gravity = map(this.z, 0, 20, 0, 0.2);


  this.fall = () => {
    this.y += this.yspeed;
    this.yspeed += this.gravity;

    if (this.y > height){
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = () => {
    const thick = map(this.z, 0, 20, 1, 2);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}