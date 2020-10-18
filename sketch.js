var wall,thickness;

var speed,weight,bullet;

function setup() 
{
  createCanvas(1300,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
 

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor="yellow";

  wall=createSprite(600,200,thickness,height/2);
  wall.shapeColor="pink";
}

  function draw() 
{
  background(3);  
  
  if(keyDown("space"))
  {
    bullet.x=50;
    bullet.y=200;
    speed=random(220,321);
    bullet.velocityX=speed;
    thickness=random(22,83);
    weight=random(30,52);
  }

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    
    if(damage<10)
    {
      wall.shapeColor="green";
    }

    if(damage>10)
    {
    wall.shapeColor="purple";
    }
    fill("white");
    text(Math.round(damage),100,200);
    
  }
  
  
  
  
  
  
  drawSprites();
}