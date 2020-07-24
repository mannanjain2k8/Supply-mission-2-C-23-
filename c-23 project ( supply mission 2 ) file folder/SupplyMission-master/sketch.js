var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
  wall1sprite = createSprite(200,200,20,100);
  wall1sprite.shapeColor = "red";

  wall2sprite = createSprite(200,200,200,20);
  wall2sprite.shapeColor = "red";

  wall3sprite = createSprite(200,200,20,100);
  wall3sprite.shapeColor = "red";

  	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 150 , 5 , { restitution: 0.4,isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1 = Bodies.rectangle(280,510,20,100,{isStatic: true});
	World.add(world,wall1);

	wall2 = Bodies.rectangle(370,550,200,20,{isStatic: true});
	World.add(world,wall2);
	
	wall3 = Bodies.rectangle(480,510,20,100,{isStatic: true});
    World.add(world,wall3)

	Engine.run(engine);
	Engine.run(engine);
	Engine.run(engine);
	Engine.run(engine);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  wall1sprite.y = wall1.position.y;
  wall1sprite.x = wall1.position.x;
  wall2sprite.x = wall2.position.x;
  wall2sprite.y = wall2.position.y;
  wall3sprite.x = wall3.position.x;
  wall3sprite.y = wall3.position.y;

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}



