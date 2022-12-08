
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, wall1, wall2, ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200, 300, 50)
	ground = new Ground(300, 600, 1000, 20);
	wall1 = new Ground(550, 550, 20, 80)
	wall2 = new Ground(400, 550, 20, 80)

	World.add(world, ball)
	
	


	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 50,50);
  ground.show();
  wall1.show();
  wall2.show();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball, {x: 0, y:0}, {x:.2, y:-.2})

	}

}


