
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;
var box4,box4Image;


var ground;

function preload()
{
	box4Image=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,150,70);
	
    ground=new Ground(600,370,1200,20);

	box1=new Box(1010,350,120,20);
	box2=new Box(1080,270,20,180);
	box3=new Box(940,270,20,180);
	box4=createSprite(1010,260,200,20);
	box4.addImage(box4Image);
	box4.scale=0.5;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:260,y:-260});
	}
}



