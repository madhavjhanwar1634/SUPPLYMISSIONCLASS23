
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangleBox1, rectangleBox2,rectaangleBox3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	rectangleBox1=createSprite(width/2,height-35,10,5)
	rectangleBox2=createSprite(450,height-35,10,5)
	rectangleBox3=createSprite(400,height-35,5,10)


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;
	//box1=new Box(400,650,100,20)
	//box2=new Box(450,650,100,20)
	//box3 = new Box(425,650,20,200)
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	rectangleBox1 = Bodies.rectangle(440,630,20,200,{isStatic:true});
	World.add(world,rectangleBox1);
	rectangleBox2 = Bodies.rectangle(390,650,20,200,{isStatic:true});
	World.add(world,rectangleBox2);
	rectangleBox3=Bodies.rectangle(340,630,20,10,{isStatic:true})
	World.add(world,rectangleBox3)

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


 
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //rectangleBox1.x=box1.position.x
  //rectangleBox1.y=box1.position.y
  rect(rectangleBox1.position.x,rectangleBox1.position.y,10,50)
rect(rectangleBox2.position.x,rectangleBox2.position.y,100,10)
rect(rectangleBox3.position.x,rectangleBox3.position.y,10,50)
  //box1.display()
  //box2.display()
  //box3.display()
  drawSprites();
 
}

function keyPressed() {
	
	
	if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false)

}

}



