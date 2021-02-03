class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.polygon=loadImage("sprites/polygon.png")
      
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("yellow");
      polygon(pos.x, pos.y, this.width, this.height);
    }
  };
