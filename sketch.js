var car, wall;
var speed, weight;







function setup() {
  createCanvas(800,400);
  speed = random(20, 65);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  weight = random(400, 1500);
  wall = createSprite(600, 200, 60, height/2);
}

function draw() {
  background(255,255,255);
  
  if (car.x > wall.x - wall.width){
    var deformation = 0.5*weight*speed*speed/2255;

    car.velocityX = 0;

    //car.x = wall.x - wall.width + 5;

    if (deformation < 100){
      car.shapeColor = color(0, 255, 0);
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation > 180){
      car.shapeColor = color(255, 0, 0);
    }
  }

  drawSprites();
}