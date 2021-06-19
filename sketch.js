
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tower1,tower2,tower3,tower4,tower5,tower6;

var bar1,bar2,bar3,bar4,bar5,bar5,bar6,bar7,bar8,bar9,bar10;

var towerenemyImg,maintower,mainImg,towernImg,backgroundImg,riverImg;

var river,bridgeImg;

function preload()
{
	
towerenemyImg = loadImage("images/towerenemy0.jpeg");
maintowerImg = loadImage("images/maintower0.jpeg");
mainImg = loadImage("images/main0.jpeg");
towernImg = loadImage("images/tower1.jpeg");
backgroundImg = loadImage("images/grassbackground.jpg");
riverImg = loadImage("images/river.jpg");
bridgeImg = loadImage("images/bridge.jpg");

}

function setup() {
	createCanvas(320, 540);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var tower1 = createSprite(150,440,50,50);
	tower1.addImage(mainImg);
	tower1.scale = 0.3;
	var tower2 = createSprite(50,400,40,40);
	tower2.addImage(towernImg);
	tower2.scale = 0.3;
	var tower3 = createSprite(250,400,40,40);
	tower3.addImage(towernImg);
	tower3.scale = 0.3;


	var tower4 = createSprite(150,40,50,50);
	tower4.addImage(maintowerImg);
	tower4.scale = 0.3;
	var tower5 = createSprite(50,80,40,40);
	tower5.addImage(towerenemyImg);
	tower5.scale = 0.3;
	var tower6 = createSprite(250,80,40,40);
	tower6.addImage(towerenemyImg);
    tower6.scale = 0.3;
   
    var river = createSprite(160,250,320,30);
    river.addImage(riverImg);
    river.scale = 0.8;
    
    var bridge = createSprite(50,250,50,10);
    bridge.addImage(bridgeImg);
    bridge.scale = 0.2;

	var bridge = createSprite(250,250,50,10);
    bridge.addImage(bridgeImg);
    bridge.scale = 0.2;





	var bar1 = createSprite(40,530,25,15);
    var bar2 = createSprite(65,530,25,15);
	var bar3 = createSprite(90,530,25,15);
	var bar4 = createSprite(115,530,25,15);
	var bar5 = createSprite(140,530,25,15);
	var bar6 = createSprite(165,530,25,15);
	var bar7 = createSprite(190,530,25,15);
	var bar8 = createSprite(215,530,25,15);
	var bar9 = createSprite(240,530,25,15);
	var bar10 = createSprite(265,530,25,15);

	bar1.shapeColor = "red";
	bar2.shapeColor = "green";
	bar3.shapeColor = "red";
	bar4.shapeColor = "green";
	bar5.shapeColor = "red";
	bar6.shapeColor = "green";
	bar7.shapeColor = "red";
	bar8.shapeColor = "green";
	bar9.shapeColor = "red";
	bar10.shapeColor = "green";

	var troop1 = createSprite(40,500,30,30);
	var troop2 = createSprite(75,500,30,30);
	var troop3 = createSprite(110,500,30,30);
	var troop4 = createSprite(145,500,30,30);
	var troop5 = createSprite(180,500,30,30);
	var troop6 = createSprite(215,500,30,30);
	var troop7 = createSprite(250,500,30,30);
	var troop8 = createSprite(285,500,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  


  drawSprites();
 
}



