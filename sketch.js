const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var ground_option;
var ball, ball_option;

function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
ball_option = {
 restitution : 1 
}


ground_option = {
  isStatic : true
}

ground= Bodies.rectangle(200,390,50,50,ground_option);
World.add(world,ground);

ball = Bodies.circle(200,200,20 ,ball_option)
World.add(world,ball);
}


function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,20);

ellipseMode (RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);


//drawSprites();

}