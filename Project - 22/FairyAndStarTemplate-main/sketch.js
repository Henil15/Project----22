var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	star = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, star);
	
	var p = {restitution:1}
	starBody = Bodies.circle(200,100,20,p)
	World.add(world,starBody)

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine) 

  ellipseMode(CENTER)
  ellipse(starBody.position.x , starBody.position.y , 20 , 20 )
  ellipse(star.position.x , star.position.y , 5 , 5 )

  drawSprites();

}

function keyPressed() {

   if(keyDown("right")){
	   fairy .velocityX = 2
   }

   if(keyDown("left")){
	fairy .velocityX = -2
}

   if(keyWentUp("right")){
	fairy .velocityX = 0
}

if(keyWentUp("left")){
	fairy .velocityX = 0
}


}
