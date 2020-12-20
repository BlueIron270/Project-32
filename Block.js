class Block {
  constructor(x, y, width, height) {
    var options = {
        'isStatic':false,
        'restitution':0.8,
        'friction':0.3,
        'density':0.0005
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
}
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world,this.body);

    }
  }
  score() {
    if(this.visibility<0 && this.visibility>=105){
      score++;
    }
  }
};
