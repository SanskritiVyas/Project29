var block1,block2,block3,block4,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,slingshot;

function setup(){
background("blue")
//levaltwo

block8=new Block(330,235,30,40)
block9=new Block(360,235,30,40)
block10=new Block(390,235,30,40)
block11=new Block(420,235,30,40)
block12=new Block(450,235,30,40)
//levelthree
block13=new Block(360,195,30,40)
block14=new Block(390,195,30,40)
block15=new Block(420,195,30,40)
//top
block16=new Block(390,155,30,40)
}
//polygon holder with slings
polygon=Bodies.circle(50,200,20)
World.add(world.polygon);

slingshot=new slingshot(this.polygon,{x:100,y:200});

imageMode (CENTER)
Image(polygon_image,polygon.position.x,polygon.position.y,40,40)

slingshot.display()


function mouseDragged(){
Matter.Bodies.setPosition(this.polygon,{x:Mouse.X,y:Mouse.Y})
}

function mouseReleased(){
slingshot.fly   
}

function draw(){
polygon.display()
block1.display()
block2.display()
block3.display()
block4.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block5.display()
block16.display()
}