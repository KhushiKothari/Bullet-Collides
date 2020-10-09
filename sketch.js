var thickness, wall ;
var speed, weight, bullet;



function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(20, 83);

  bullet = createSprite(50, 200, 60, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
  
 
  
  
}

function draw() {
  background("pink");  
  
  bullet.depth = wall.depth;
  bullet.depth = bullet.depth + 1;
  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    
    if (damage > 10) {
      wall.shapeColor = "yellow";
      
    }
    
    if (damage < 10) {
      wall.shapeColor = "red";
      
      
    }
    
    
  }
  drawSprites();
}