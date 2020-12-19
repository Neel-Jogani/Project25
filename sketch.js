
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, dustbinImage;
var ground;
var paper;

function preload() {
	dustbinImage = loadImage("dustbin.png")
}

function setup() {
	
	createCanvas(1400,400);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,70);
	ground = new Ground (700,320,1400,10);
	dustbin1 = new Dustbin (1035,245,20,130);
	dustbin2 = new Dustbin (1100,300,150,20)
	dustbin3 = new Dustbin (1165,245,20,130);

	Engine.run(engine);
  
}

function draw() {
  
  background("lightgray");

  ground.display();
  
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  imageMode(CENTER);
  image(dustbinImage,1100,235,170,180);

  paper.display();
 
}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-115})

	}

}


