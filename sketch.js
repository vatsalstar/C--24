
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,ball,rect1,rect2,rect3;
var weight,speed;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	speed = random(55,90);
	weight = random(300,1500);

	ball=new Paper(500,400);
	ground = new Ground(800,680,1600,10);
	dustbin =new Dustbin(1000,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  Engine.run(engine);
	  //Render.run(render);
  
}


function draw() {


  background(0);
  rectMode(CENTER);
  
  ball.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}
function KeyPressed (){
	if (KeyCode === UP_ARROW) {

	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}
	}
